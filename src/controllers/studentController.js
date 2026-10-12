const bcrypt = require('bcryptjs');
const { sequelize, User, Student } = require('../models');

const registerStudent = async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth, gender, className,
            guardianName, guardianPhone, address } = req.body;
    const student = await Student.create({
      firstName, lastName, dateOfBirth, gender, className,
      guardianName, guardianPhone, address,
    });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Could not register student' });
  }
};

const admitStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    if (student.status === 'admitted') {
      return res.status(400).json({ message: 'Student already admitted' });
    }
    const year = new Date().getFullYear();
    student.status = 'admitted';
    student.admittedAt = new Date();
    student.admissionNumber = `UIS/${year}/${String(student.id).padStart(4, '0')}`;
    await student.save();
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Could not admit student' });
  }
};

const createStudentAccount = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    if (student.status !== 'admitted') {
      return res.status(400).json({ message: 'Admit the student first' });
    }
    if (student.userId) {
      return res.status(409).json({ message: 'Student already has an account' });
    }

    const { email, password } = req.body;
    const existing = await User.findOne({ where: { email } });
    if (existing) return res.status(409).json({ message: 'Email already in use' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await sequelize.transaction(async (t) => {
      const created = await User.create({
        name: `${student.firstName} ${student.lastName}`,
        email,
        password: hashed,
        role: 'student',
      }, { transaction: t });
      await student.update({ userId: created.id }, { transaction: t });
      return created;
    });

    res.status(201).json({ message: 'Account created', userId: user.id, email: user.email });
  } catch (error) {
    res.status(500).json({ message: 'Could not create account' });
  }
};

const listStudents = async (req, res) => {
  try {
    const where = {};
    if (req.query.className) where.className = req.query.className;
    if (req.query.status) where.status = req.query.status;
    const students = await Student.findAll({ where, order: [['lastName', 'ASC']] });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch students' });
  }
};

const getMyProfile = async (req, res) => {
  try {
    const student = await Student.findOne({ where: { userId: req.user.id } });
    if (!student) return res.status(404).json({ message: 'No student record for this account' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch profile' });
  }
};

const getStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    if (req.user.role === 'student' && student.userId !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch student' });
  }
};

module.exports = {
  registerStudent, admitStudent, createStudentAccount,
  listStudents, getMyProfile, getStudent,
};
