const { Document } = require('../models');
const { detectType, saveFile, removeFile, urlFor } = require('../utils/storage');

const downloadName = (title) =>
  `${title.replace(/[^a-zA-Z0-9 _-]/g, '').trim().replace(/\s+/g, '-') || 'document'}.pdf`;

const format = (d) => ({
  id: d.id,
  title: d.title,
  category: d.category,
  description: d.description,
  fileSize: d.fileSize,
  createdAt: d.createdAt,
  url: urlFor(d.storagePath),
  downloadUrl: urlFor(d.storagePath, downloadName(d.title)),
});

const list = async (req, res) => {
  try {
    const where = {};
    if (req.query.category) where.category = req.query.category;
    const rows = await Document.findAll({ where, order: [['createdAt', 'DESC']] });
    res.json(rows.map(format));
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch documents' });
  }
};

const create = async (req, res) => {
  let key;
  try {
    if (!req.file) return res.status(400).json({ message: 'A PDF file is required' });
    if (detectType(req.file.buffer) !== 'application/pdf') {
      return res.status(400).json({ message: 'Only PDF files are allowed' });
    }

    key = await saveFile('documents', req.file.buffer, 'application/pdf');
    const doc = await Document.create({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description || null,
      storagePath: key,
      fileSize: req.file.size,
      uploadedBy: req.user.id,
    });
    res.status(201).json(format(doc));
  } catch (error) {
    if (key) await removeFile(key);
    res.status(500).json({ message: 'Could not upload document' });
  }
};

const remove = async (req, res) => {
  try {
    const doc = await Document.findByPk(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Document not found' });
    await doc.destroy();
    await removeFile(doc.storagePath);
    res.json({ message: 'Document deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Could not delete document' });
  }
};

module.exports = { list, create, remove };