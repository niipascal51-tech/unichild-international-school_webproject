const sequelize = require('../config/database');
const User = require('./User');
const Student = require('./Student');

User.hasOne(Student, { foreignKey: 'userId' });
Student.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Student };
