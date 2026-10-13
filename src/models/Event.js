const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('Event', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  category: {
    type: DataTypes.ENUM('academic', 'event', 'meeting', 'examination', 'admission', 'holiday'),
    allowNull: false,
    defaultValue: 'event',
  },
  startDate: { type: DataTypes.DATEONLY, allowNull: false },
  endDate: { type: DataTypes.DATEONLY, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: true },
  createdBy: { type: DataTypes.INTEGER, allowNull: false },
}, { tableName: 'events' });

module.exports = Event;