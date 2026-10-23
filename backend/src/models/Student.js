const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: true, unique: true },
  admissionNumber: { type: DataTypes.STRING, unique: true },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  dateOfBirth: { type: DataTypes.DATEONLY, allowNull: false },
  gender: { type: DataTypes.ENUM('male', 'female'), allowNull: false },
  className: { type: DataTypes.STRING, allowNull: false },
  guardianName: { type: DataTypes.STRING, allowNull: false },
  guardianPhone: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING },
  status: {
    type: DataTypes.ENUM('pending', 'admitted'),
    defaultValue: 'pending',
  },
  admittedAt: { type: DataTypes.DATE },
}, { tableName: 'students' });

module.exports = Student;
