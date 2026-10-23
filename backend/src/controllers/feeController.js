const { Student, Fee } = require('../models');

const format = (f) => ({
  id: f.id,
  term: f.term,
  session: f.session,
  status: f.status,
  amountOwed: f.amountOwed === null ? null : Number(f.amountOwed),
  note: f.note,
  updatedAt: f.updatedAt,
});

const summarise = (fees) => ({
  overallStatus: fees.length === 0
    ? 'unavailable'
    : fees.some((f) => f.status === 'owing') ? 'owing' : 'not_owing',
  records: fees.map(format),
});

const studentFilter = (studentId, query) => {
  const where = { studentId };
  if (query.term) where.term = query.term;
  if (query.session) where.session = query.session;
  return where;
};

const ORDER = [['session', 'DESC'], ['term', 'ASC']];

const getMyFees = async (req, res) => {
  try {
    const student = await Student.findOne({ where: { userId: req.user.id } });
    if (!student) return res.status(404).json({ message: 'No student record for this account' });
    const fees = await Fee.findAll({ where: studentFilter(student.id, req.query), order: ORDER });
    res.json({
      student: {
        id: student.id,
        name: `${student.firstName} ${student.lastName}`,
        admissionNumber: student.admissionNumber,
        className: student.className,
      },
      ...summarise(fees),
    });
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch fee status' });
  }
};

const getStudentFees = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.studentId);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    const fees = await Fee.findAll({ where: studentFilter(student.id, req.query), order: ORDER });
    res.json({
      student: {
        id: student.id,
        name: `${student.firstName} ${student.lastName}`,
        admissionNumber: student.admissionNumber,
        className: student.className,
      },
      ...summarise(fees),
    });
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch fee status' });
  }
};

const setFee = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.studentId);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    if (student.status !== 'admitted') {
      return res.status(400).json({ message: 'Fee status can only be set for admitted students' });
    }

    const { term, session, status, amountOwed, note } = req.body;
    const values = {
      status,
      amountOwed: status === 'owing' && amountOwed !== undefined ? amountOwed : null,
      note: note || null,
      updatedBy: req.user.id,
    };

    const [fee, created] = await Fee.findOrCreate({
      where: { studentId: student.id, term, session },
      defaults: values,
    });
    if (!created) await fee.update(values);

    res.status(created ? 201 : 200).json(format(fee));
  } catch (error) {
    res.status(500).json({ message: 'Could not save fee status' });
  }
};

const listFees = async (req, res) => {
  try {
    const where = {};
    if (req.query.term) where.term = req.query.term;
    if (req.query.session) where.session = req.query.session;
    if (req.query.status) where.status = req.query.status;

    const studentWhere = {};
    if (req.query.className) studentWhere.className = req.query.className;

    const fees = await Fee.findAll({
      where,
      include: [{
        model: Student,
        where: studentWhere,
        attributes: ['id', 'firstName', 'lastName', 'admissionNumber', 'className'],
      }],
      order: ORDER,
    });

    res.json(fees.map((f) => ({
      ...format(f),
      student: {
        id: f.Student.id,
        name: `${f.Student.firstName} ${f.Student.lastName}`,
        admissionNumber: f.Student.admissionNumber,
        className: f.Student.className,
      },
    })));
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch fee records' });
  }
};

const deleteFee = async (req, res) => {
  try {
    const fee = await Fee.findByPk(req.params.id);
    if (!fee) return res.status(404).json({ message: 'Fee record not found' });
    await fee.destroy();
    res.json({ message: 'Fee record deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Could not delete fee record' });
  }
};

module.exports = { getMyFees, getStudentFees, setFee, listFees, deleteFee };