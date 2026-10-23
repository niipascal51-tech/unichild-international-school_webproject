require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { rateLimit } = require('express-rate-limit');
const { sequelize } = require('./src/models');

if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
  console.error('❌ JWT_SECRET must be set and at least 32 characters long');
  process.exit(1);
}

const app = express();
const isProd = process.env.NODE_ENV === 'production';

app.set('trust proxy', 1);
app.use(helmet());

const allowedOrigins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || (!isProd && allowedOrigins.length === 0)) return callback(null, true);
    callback(null, allowedOrigins.includes(origin));
  },
}));

app.use(express.json({ limit: '100kb' }));

app.use('/api', rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 600,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many requests. Please slow down.' },
}));

app.use('/api/auth/login', rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  skipSuccessfulRequests: true,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many failed login attempts. Try again in 15 minutes.' },
}));

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/students', require('./src/routes/studentRoutes'));
app.use('/api/teachers', require('./src/routes/teacherRoutes'));
app.use('/api/results', require('./src/routes/resultRoutes'));
app.use('/api/fees', require('./src/routes/feeRoutes'));
app.use('/api/news', require('./src/routes/postRoutes')('news'));
app.use('/api/announcements', require('./src/routes/postRoutes')('announcement'));
app.use('/api/events', require('./src/routes/eventRoutes'));
app.use('/api/content', require('./src/routes/contentRoutes'));
app.use('/api/documents', require('./src/routes/documentRoutes'));
app.use('/api/gallery', require('./src/routes/galleryRoutes'));
app.use('/api/enquiries', require('./src/routes/enquiryRoutes'));

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ message: 'Invalid JSON in request body' });
  }
  if (err.type === 'entity.too.large') {
    return res.status(413).json({ message: 'Request body too large' });
  }
  console.error(err);
  res.status(500).json({ message: 'Something went wrong' });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('✅ Database connected and tables synced');

    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
    server.on('error', (error) => {
      console.error('❌ Could not start server:', error.message);
      process.exit(1);
    });
  } catch (error) {
    console.error('❌ Could not start server:', error.message);
    process.exit(1);
  }
};

startServer();