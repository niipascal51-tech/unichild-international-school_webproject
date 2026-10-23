const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Enquiry = sequelize.define('Enquiry', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: true },
  subject: { type: DataTypes.STRING, allowNull: true },
  message: { type: DataTypes.TEXT, allowNull: false },
  status: {
    type: DataTypes.ENUM('new', 'read', 'resolved'),
    allowNull: false,
    defaultValue: 'new',
  },
}, { tableName: 'enquiries' });

module.exports = Enquiry;