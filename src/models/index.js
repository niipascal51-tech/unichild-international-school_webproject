const sequelize = require('../config/database');
const User = require('./User');
const Student = require('./Student');
const Teacher = require('./Teacher');
const Result = require('./Result');

User.hasOne(Student, { foreignKey: 'userId' });
Student.belongsTo(User, { foreignKey: 'userId' });

User.hasOne(Teacher, { foreignKey: 'userId' });
Teacher.belongsTo(User, { foreignKey: 'userId' });

Student.hasMany(Result, { foreignKey: 'studentId' });
Result.belongsTo(Student, { foreignKey: 'studentId' });

module.exports = { sequelize, User, Student, Teacher, Result };