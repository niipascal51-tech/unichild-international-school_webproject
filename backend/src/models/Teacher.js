const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Teacher = sequelize.define('Teacher', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false, unique: true },
  staffId: { type: DataTypes.STRING, unique: true },
  phone: { type: DataTypes.STRING, allowNull: false },
  subjects: { type: DataTypes.JSONB, allowNull: false, defaultValue: [] },
  assignedClasses: { type: DataTypes.JSONB, allowNull: false, defaultValue: [] },
}, { tableName: 'teachers' });

module.exports = Teacher;
