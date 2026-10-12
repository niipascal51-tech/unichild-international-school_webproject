const sequelize = require('./src/config/database');

sequelize.authenticate()
  .then(() => console.log('✅ Connected to Supabase'))
  .catch((err) => console.error('❌ Connection failed:', err.message))
  .finally(() => sequelize.close());