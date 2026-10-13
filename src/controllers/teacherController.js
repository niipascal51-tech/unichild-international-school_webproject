const bcrypt = require('bcryptjs');
const { sequelize, User, Teacher } = require('../models');

const withUser = [{ model: User, attributes: ['name', 'email'] }];

const createTeacher = async (req, res) => {
  try {
    const { name, email, password, phone, subjects = [], assignedClasses = [] } = req.body;

    const existing = await User.findOne({ where: { email } });
    if (existing) return res.status(409).json({ message: 'Email already in use' });

    const hashed = await bcrypt.hash(password, 10);
    const teacher = await sequelize.transaction(async (t) => {
      const user = await User.create(
        { name, email, password: hashed, role: 'teacher' },
        { transaction: t }
      );
      const created = await Teacher.create(
        { userId: user.id, phone, subjects, assignedClasses },
        { transaction: t }
      );
      created.staffId = `UIS/T/${String(created.id).padStart(3, '0')}`;
      await created.save({ transaction: t });
      return created;
    });

    res.status(201).json({
      id: teacher.id,
      staffId: teacher.staffId,
      name,
      email,
      phone: teacher.phone,
      subjects: teacher.subjects,
      assignedClasses: teacher.assignedClasses,
    });
  } catch (error) {
    res.status(500).json({ message: 'Could not create teacher' });
  }
};

const listTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll({ include: withUser, order: [['id', 'ASC']] });
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch teachers' });
  }
};

const getTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id, { include: withUser });
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
    if (req.user.role === 'teacher' && teacher.userId !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch teacher' });
  }
};

const getMyProfile = async (req, res) => {
  try {
    const teacher = await Teacher.findOne({ where: { userId: req.user.id }, include: withUser });
    if (!teacher) return res.status(404).json({ message: 'No teacher record for this account' });
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch profile' });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' });

    const { phone, subjects, assignedClasses } = req.body;
    if (phone !== undefined) teacher.phone = phone;
    if (subjects !== undefined) teacher.subjects = subjects;
    if (assignedClasses !== undefined) teacher.assignedClasses = assignedClasses;
    await teacher.save();

    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Could not update teacher' });
  }
};

module.exports = { createTeacher, listTeachers, getTeacher, getMyProfile, updateTeacher };
