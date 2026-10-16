const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const GalleryImage = sequelize.define('GalleryImage', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  caption: { type: DataTypes.STRING, allowNull: true },
  category: {
    type: DataTypes.ENUM('building', 'events', 'activities', 'other'),
    allowNull: false,
    defaultValue: 'other',
  },
  storagePath: { type: DataTypes.STRING, allowNull: false },
  uploadedBy: { type: DataTypes.INTEGER, allowNull: false },
}, { tableName: 'gallery_images' });

module.exports = GalleryImage;