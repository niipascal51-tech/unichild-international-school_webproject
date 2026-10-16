const sequelize = require('../config/database');
const User = require('./User');
const Student = require('./Student');
const Teacher = require('./Teacher');
const Result = require('./Result');
const Fee = require('./Fee');
const Post = require('./Post');
const Event = require('./Event');
const SiteContent = require('./SiteContent');
const Document = require('./Document');
const GalleryImage = require('./GalleryImage');
const Enquiry = require('./Enquiry');

User.hasOne(Student, { foreignKey: 'userId' });
Student.belongsTo(User, { foreignKey: 'userId' });

User.hasOne(Teacher, { foreignKey: 'userId' });
Teacher.belongsTo(User, { foreignKey: 'userId' });

Student.hasMany(Result, { foreignKey: 'studentId' });
Result.belongsTo(Student, { foreignKey: 'studentId' });

Student.hasMany(Fee, { foreignKey: 'studentId' });
Fee.belongsTo(Student, { foreignKey: 'studentId' });

module.exports = {
  sequelize, User, Student, Teacher, Result, Fee,
  Post, Event, SiteContent, Document, GalleryImage, Enquiry,
};