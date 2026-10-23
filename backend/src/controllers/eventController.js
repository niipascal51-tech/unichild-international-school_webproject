const { Op } = require('sequelize');
const { Event } = require('../models');

const format = (e) => ({
  id: e.id,
  title: e.title,
  description: e.description,
  category: e.category,
  startDate: e.startDate,
  endDate: e.endDate,
  location: e.location,
});

const list = async (req, res) => {
  try {
    const where = {};
    if (req.query.category) where.category = req.query.category;
    if (req.query.from) where.endDate = { [Op.gte]: req.query.from };
    if (req.query.to) where.startDate = { [Op.lte]: req.query.to };

    const rows = await Event.findAll({ where, order: [['startDate', 'ASC']] });
    res.json(rows.map(format));
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch events' });
  }
};

const getOne = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(format(event));
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch event' });
  }
};

const create = async (req, res) => {
  try {
    const { title, description, category, startDate, endDate, location } = req.body;
    const end = endDate || startDate;
    if (end < startDate) {
      return res.status(400).json({ message: 'End date cannot be before start date' });
    }
    const event = await Event.create({
      title, description, category, startDate, endDate: end, location,
      createdBy: req.user.id,
    });
    res.status(201).json(format(event));
  } catch (error) {
    res.status(500).json({ message: 'Could not create event' });
  }
};

const update = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const start = req.body.startDate ?? event.startDate;
    const end = req.body.endDate ?? event.endDate;
    if (end < start) {
      return res.status(400).json({ message: 'End date cannot be before start date' });
    }

    const fields = ['title', 'description', 'category', 'location'];
    fields.forEach((f) => {
      if (req.body[f] !== undefined) event[f] = req.body[f];
    });
    event.startDate = start;
    event.endDate = end;
    await event.save();

    res.json(format(event));
  } catch (error) {
    res.status(500).json({ message: 'Could not update event' });
  }
};

const remove = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    await event.destroy();
    res.json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Could not delete event' });
  }
};

module.exports = { list, getOne, create, update, remove };