require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./src/models');

const app = express();

app.use(cors());
app.use(express.json());

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