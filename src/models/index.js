const sequelize = require('../config/database');
const User = require('./User');
const Student = require('./Student');
const Teacher = require('./Teacher');

User.hasOne(Student, { foreignKey: 'userId' });
Student.belongsTo(User, { foreignKey: 'userId' });

User.hasOne(Teacher, { foreignKey: 'userId' });
Teacher.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Student, Teacher };
