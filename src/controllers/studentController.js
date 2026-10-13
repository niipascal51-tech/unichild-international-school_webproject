const bcrypt = require('bcryptjs');
const { sequelize, User, Student, Teacher } = require('../models');

const EDITABLE = [
  'firstName', 'lastName', 'dateOfBirth', 'gender',
  'className', 'guardianName', 'guardianPhone', 'address',
];

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
    if (req.query.status) where.status = req.query.status;
    if (!(req.user.role === 'admin' && req.query.includeInactive === 'true')) {
      where.isActive = true;
    }

    if (req.user.role === 'teacher') {
      const teacher = await Teacher.findOne({ where: { userId: req.user.id } });
      const assigned = teacher ? teacher.assignedClasses : [];
      if (assigned.length === 0) return res.json([]);

      if (req.query.className) {
        if (!assigned.includes(req.query.className)) {
          return res.status(403).json({ message: 'Class not assigned to you' });
        }
        where.className = req.query.className;
      } else {
        where.className = assigned;
      }
    } else if (req.query.className) {
      where.className = req.query.className;
    }

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
    if (req.user.role === 'teacher') {
      const teacher = await Teacher.findOne({ where: { userId: req.user.id } });
      if (!teacher || !teacher.assignedClasses.includes(student.className)) {
        return res.status(403).json({ message: 'Access denied' });
      }
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch student' });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const changes = {};
    EDITABLE.forEach((field) => {
      if (req.body[field] !== undefined) changes[field] = req.body[field];
    });

    await sequelize.transaction(async (t) => {
      await student.update(changes, { transaction: t });
      if (student.userId && (changes.firstName || changes.lastName)) {
        await User.update(
          { name: `${student.firstName} ${student.lastName}` },
          { where: { id: student.userId }, transaction: t }
        );
      }
    });

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Could not update student' });
  }
};

const setStudentActive = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const isActive = req.body.isActive === true || req.body.isActive === 'true';
    await sequelize.transaction(async (t) => {
      await student.update({ isActive }, { transaction: t });
      if (student.userId) {
        await User.update({ isActive }, { where: { id: student.userId }, transaction: t });
      }
    });

    res.json({
      id: student.id,
      isActive,
      message: isActive ? 'Student reactivated' : 'Student deactivated',
    });
  } catch (error) {
    res.status(500).json({ message: 'Could not change student status' });
  }
};

module.exports = {
  registerStudent, admitStudent, createStudentAccount, listStudents,
  getMyProfile, getStudent, updateStudent, setStudentActive,
};