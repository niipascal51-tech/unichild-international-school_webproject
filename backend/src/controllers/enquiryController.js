const { Enquiry } = require('../models');

const submit = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    await Enquiry.create({
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
    });
    res.status(201).json({ message: 'Thank you. Your enquiry has been received.' });
  } catch (error) {
    res.status(500).json({ message: 'Could not submit enquiry' });
  }
};

const list = async (req, res) => {
  try {
    const where = {};
    if (req.query.status) where.status = req.query.status;
    const rows = await Enquiry.findAll({ where, order: [['createdAt', 'DESC']] });
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch enquiries' });
  }
};

const setStatus = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByPk(req.params.id);
    if (!enquiry) return res.status(404).json({ message: 'Enquiry not found' });
    enquiry.status = req.body.status;
    await enquiry.save();
    res.json(enquiry);
  } catch (error) {
    res.status(500).json({ message: 'Could not update enquiry' });
  }
};

const remove = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByPk(req.params.id);
    if (!enquiry) return res.status(404).json({ message: 'Enquiry not found' });
    await enquiry.destroy();
    res.json({ message: 'Enquiry deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Could not delete enquiry' });
  }
};

module.exports = { submit, list, setStatus, remove };