require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./src/models');

const app = express();

app.use(cors());
app.use(express.json());
const authRoutes = require('./src/routes/authRoutes');
app.use('/api/auth', authRoutes);

const studentRoutes = require('./src/routes/studentRoutes');
app.use('/api/students', studentRoutes);

const teacherRoutes = require('./src/routes/teacherRoutes');
app.use('/api/teachers', teacherRoutes);

const resultRoutes = require('./src/routes/resultRoutes');
app.use('/api/results', resultRoutes);

const feeRoutes = require('./src/routes/feeRoutes');
app.use('/api/fees', feeRoutes);

const postRoutes = require('./src/routes/postRoutes');
const eventRoutes = require('./src/routes/eventRoutes');
const contentRoutes = require('./src/routes/contentRoutes');

app.use('/api/news', postRoutes('news'));
app.use('/api/announcements', postRoutes('announcement'));
app.use('/api/events', eventRoutes);
app.use('/api/content', contentRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('✅ Database connected and tables synced');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Could not start server:', error.message);
    process.exit(1);
  }
};

startServer();