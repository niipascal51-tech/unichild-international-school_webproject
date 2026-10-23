const { GalleryImage } = require('../models');
const { detectType, saveFile, removeFile, urlFor } = require('../utils/storage');

const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

const format = (g) => ({
  id: g.id,
  caption: g.caption,
  category: g.category,
  createdAt: g.createdAt,
  url: urlFor(g.storagePath),
});

const list = async (req, res) => {
  try {
    const where = {};
    if (req.query.category) where.category = req.query.category;
    const rows = await GalleryImage.findAll({ where, order: [['createdAt', 'DESC']] });
    res.json(rows.map(format));
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch gallery' });
  }
};

const create = async (req, res) => {
  let key;
  try {
    if (!req.file) return res.status(400).json({ message: 'An image file is required' });
    const type = detectType(req.file.buffer);
    if (!IMAGE_TYPES.includes(type)) {
      return res.status(400).json({ message: 'Only JPG, PNG or WebP images are allowed' });
    }

    key = await saveFile('gallery', req.file.buffer, type);
    const image = await GalleryImage.create({
      caption: req.body.caption || null,
      category: req.body.category,
      storagePath: key,
      uploadedBy: req.user.id,
    });
    res.status(201).json(format(image));
  } catch (error) {
    if (key) await removeFile(key);
    res.status(500).json({ message: 'Could not upload image' });
  }
};

const update = async (req, res) => {
  try {
    const image = await GalleryImage.findByPk(req.params.id);
    if (!image) return res.status(404).json({ message: 'Image not found' });
    if (req.body.caption !== undefined) image.caption = req.body.caption || null;
    if (req.body.category !== undefined) image.category = req.body.category;
    await image.save();
    res.json(format(image));
  } catch (error) {
    res.status(500).json({ message: 'Could not update image' });
  }
};

const remove = async (req, res) => {
  try {
    const image = await GalleryImage.findByPk(req.params.id);
    if (!image) return res.status(404).json({ message: 'Image not found' });
    await image.destroy();
    await removeFile(image.storagePath);
    res.json({ message: 'Image deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Could not delete image' });
  }
};

module.exports = { list, create, update, remove };