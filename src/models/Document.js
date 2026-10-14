const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Document = sequelize.define('Document', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  category: {
    type: DataTypes.ENUM('about', 'admissions', 'fees', 'forms', 'other'),
    allowNull: false,
    defaultValue: 'other',
  },
  description: { type: DataTypes.STRING, allowNull: true },
  storagePath: { type: DataTypes.STRING, allowNull: false },
  fileSize: { type: DataTypes.INTEGER, allowNull: false },
  uploadedBy: { type: DataTypes.INTEGER, allowNull: false },
}, { tableName: 'documents' });

module.exports = Document;