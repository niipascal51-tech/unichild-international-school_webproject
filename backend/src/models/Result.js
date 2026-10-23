const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Result = sequelize.define('Result', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  studentId: { type: DataTypes.INTEGER, allowNull: false },
  subject: { type: DataTypes.STRING, allowNull: false },
  term: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isIn: [['First Term', 'Second Term', 'Third Term']] },
  },
  session: { type: DataTypes.STRING, allowNull: false },
  score: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: { min: 0, max: 100 },
  },
  uploadedBy: { type: DataTypes.INTEGER, allowNull: false },
}, {
  tableName: 'results',
  indexes: [{ unique: true, fields: ['studentId', 'subject', 'term', 'session'] }],
});

module.exports = Result;