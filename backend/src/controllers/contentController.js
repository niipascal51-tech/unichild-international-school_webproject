const { SiteContent } = require('../models');

const format = (c) => ({
  section: c.section,
  title: c.title,
  body: c.body,
  data: c.data,
  updatedAt: c.updatedAt,
});

const getAll = async (req, res) => {
  try {
    const rows = await SiteContent.findAll();
    const out = {};
    rows.forEach((r) => { out[r.section] = format(r); });
    res.json(out);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch content' });
  }
};

const getOne = async (req, res) => {
  try {
    const row = await SiteContent.findOne({ where: { section: req.params.section } });
    if (!row) return res.status(404).json({ message: 'This information has not been published yet' });
    res.json(format(row));
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch content' });
  }
};

const save = async (req, res) => {
  try {
    const { title, body, data } = req.body;
    const [row, created] = await SiteContent.findOrCreate({
      where: { section: req.params.section },
      defaults: { title, body, data: data ?? null, updatedBy: req.user.id },
    });
    if (!created) {
      await row.update({
        title,
        body,
        data: data !== undefined ? data : row.data,
        updatedBy: req.user.id,
      });
    }
    res.status(created ? 201 : 200).json(format(row));
  } catch (error) {
    res.status(500).json({ message: 'Could not save content' });
  }
};

const remove = async (req, res) => {
  try {
    const row = await SiteContent.findOne({ where: { section: req.params.section } });
    if (!row) return res.status(404).json({ message: 'Content not found' });
    await row.destroy();
    res.json({ message: 'Content deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Could not delete content' });
  }
};

module.exports = { getAll, getOne, save, remove };