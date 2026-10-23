const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Fee = sequelize.define('Fee', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  studentId: { type: DataTypes.INTEGER, allowNull: false },
  term: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isIn: [['First Term', 'Second Term', 'Third Term']] },
  },
  session: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.ENUM('owing', 'not_owing'), allowNull: false },
  amountOwed: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
  note: { type: DataTypes.STRING, allowNull: true },
  updatedBy: { type: DataTypes.INTEGER, allowNull: false },
}, {
  tableName: 'fees',
  indexes: [{ unique: true, fields: ['studentId', 'term', 'session'] }],
});

module.exports = Fee;
