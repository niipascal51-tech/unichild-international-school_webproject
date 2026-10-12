require('dotenv').config();
const bcrypt = require('bcryptjs');
const { sequelize, User } = require('./models');

(async () => {
  try {
    await sequelize.sync();
    const email = process.env.ADMIN_EMAIL;
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      console.log('Admin already exists');
    } else {
      const password = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
      await User.create({ name: process.env.ADMIN_NAME, email, password, role: 'admin' });
      console.log('✅ Admin created');
    }
  } catch (error) {
    console.error('❌ Failed:', error.message);
  } finally {
    await sequelize.close();
  }
})();