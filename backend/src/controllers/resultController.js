const PDFDocument = require('pdfkit');
const { sequelize, Student, Teacher, Result } = require('../models');
const { gradeFor } = require('../utils/grading');

const assignedClasses = async (userId) => {
  const teacher = await Teacher.findOne({ where: { userId } });
  return teacher ? teacher.assignedClasses : [];
};

const canView = async (user, student) => {
  if (user.role === 'admin') return true;
  if (user.role === 'student') return student.userId === user.id;
  if (user.role === 'teacher') {
    return (await assignedClasses(user.id)).includes(student.className);
  }
  return false;
};

const buildReport = async (student, query) => {
  const where = { studentId: student.id };
  if (query.term) where.term = query.term;
  if (query.session) where.session = query.session;

  const rows = await Result.findAll({
    where,
    order: [['session', 'DESC'], ['term', 'ASC'], ['subject', 'ASC']],
  });
  const results = rows.map((r) => ({
    id: r.id,
    subject: r.subject,
    term: r.term,
    session: r.session,
    score: r.score,
    ...gradeFor(r.score),
  }));

  const total = results.reduce((sum, r) => sum + r.score, 0);
  return {
    student: {
      id: student.id,
      name: `${student.firstName} ${student.lastName}`,
      admissionNumber: student.admissionNumber,
      className: student.className,
    },
    results,
    summary: {
      subjects: results.length,
      total,
      average: results.length ? Number((total / results.length).toFixed(2)) : 0,
    },
  };
};

const uploadResults = async (req, res) => {
  try {
    const { subject, term, session, records } = req.body;

    const ids = [...new Set(records.map((r) => r.studentId))];
    const students = await Student.findAll({ where: { id: ids } });
    if (students.length !== ids.length) {
      return res.status(400).json({ message: 'One or more students not found' });
    }
    if (students.some((s) => s.status !== 'admitted')) {
      return res.status(400).json({ message: 'Results can only be added for admitted students' });
    }
    if (req.user.role === 'teacher') {
      const assigned = await assignedClasses(req.user.id);
      if (students.some((s) => !assigned.includes(s.className))) {
        return res.status(403).json({ message: 'You can only upload results for your assigned classes' });
      }
    }

    const saved = await sequelize.transaction(async (t) => {
      let count = 0;
      for (const r of records) {
        const [row, created] = await Result.findOrCreate({
          where: { studentId: r.studentId, subject, term, session },
          defaults: { score: r.score, uploadedBy: req.user.id },
          transaction: t,
        });
        if (!created) {
          row.score = r.score;
          row.uploadedBy = req.user.id;
          await row.save({ transaction: t });
        }
        count += 1;
      }
      return count;
    });

    res.status(201).json({ message: `${saved} result(s) saved`, count: saved });
  } catch (error) {
    res.status(500).json({ message: 'Could not save results' });
  }
};

const getStudentResults = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.studentId);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    if (!(await canView(req.user, student))) {
      return res.status(403).json({ message: 'Access denied' });
    }
    res.json(await buildReport(student, req.query));
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch results' });
  }
};

const getMyResults = async (req, res) => {
  try {
    const student = await Student.findOne({ where: { userId: req.user.id } });
    if (!student) return res.status(404).json({ message: 'No student record for this account' });
    res.json(await buildReport(student, req.query));
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch results' });
  }
};

const sendPdf = (res, report, query) => {
  const { student, results, summary } = report;
  const inline = query.disposition === 'inline';
  const fileTag = (student.admissionNumber || `student-${student.id}`).replace(/[^a-zA-Z0-9]/g, '-');

  const doc = new PDFDocument({ margin: 50, size: 'A4' });
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition',
    `${inline ? 'inline' : 'attachment'}; filename="results-${fileTag}.pdf"`
  );
  doc.pipe(res);

  doc.fontSize(18).font('Helvetica-Bold').text('Unichild International School', { align: 'center' });
  doc.fontSize(13).font('Helvetica').text('Student Result Sheet', { align: 'center' });
  doc.moveDown();

  doc.fontSize(11);
  doc.text(`Name: ${student.name}`);
  doc.text(`Admission number: ${student.admissionNumber || 'N/A'}`);
  doc.text(`Class: ${student.className}`);
  doc.text(`Term: ${query.term || 'All terms'}    Session: ${query.session || 'All sessions'}`);
  doc.moveDown();

  const cols = [50, 200, 290, 370, 420, 470];
  const heading = (y) => {
    doc.font('Helvetica-Bold');
    ['Subject', 'Term', 'Session', 'Score', 'Grade', 'Remark'].forEach((t, i) =>
      doc.text(t, cols[i], y, { lineBreak: false })
    );
    doc.font('Helvetica');
  };

  let y = doc.y;
  heading(y);
  y += 20;
  results.forEach((r) => {
    if (y > 740) {
      doc.addPage();
      y = 50;
      heading(y);
      y += 20;
    }
    [r.subject, r.term, r.session, String(r.score), r.grade, r.remark].forEach((t, i) =>
      doc.text(t, cols[i], y, { lineBreak: false })
    );
    y += 18;
  });

  if (y > 700) {
    doc.addPage();
    y = 50;
  }
  doc.font('Helvetica-Bold');
  doc.text(
    `Subjects: ${summary.subjects}    Total: ${summary.total}    Average: ${summary.average}`,
    50,
    y + 10
  );
  doc.end();
};

const getStudentResultsPdf = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.studentId);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    if (!(await canView(req.user, student))) {
      return res.status(403).json({ message: 'Access denied' });
    }
    const report = await buildReport(student, req.query);
    if (report.results.length === 0) {
      return res.status(404).json({ message: 'No results available' });
    }
    sendPdf(res, report, req.query);
  } catch (error) {
    res.status(500).json({ message: 'Could not generate PDF' });
  }
};

const getMyResultsPdf = async (req, res) => {
  try {
    const student = await Student.findOne({ where: { userId: req.user.id } });
    if (!student) return res.status(404).json({ message: 'No student record for this account' });
    const report = await buildReport(student, req.query);
    if (report.results.length === 0) {
      return res.status(404).json({ message: 'No results available' });
    }
    sendPdf(res, report, req.query);
  } catch (error) {
    res.status(500).json({ message: 'Could not generate PDF' });
  }
};

const updateResult = async (req, res) => {
  try {
    const result = await Result.findByPk(req.params.id);
    if (!result) return res.status(404).json({ message: 'Result not found' });
    result.score = req.body.score;
    result.uploadedBy = req.user.id;
    await result.save();
    res.json({ message: 'Result updated', id: result.id, score: result.score });
  } catch (error) {
    res.status(500).json({ message: 'Could not update result' });
  }
};

const deleteResult = async (req, res) => {
  try {
    const result = await Result.findByPk(req.params.id);
    if (!result) return res.status(404).json({ message: 'Result not found' });
    await result.destroy();
    res.json({ message: 'Result deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Could not delete result' });
  }
};

module.exports = {
  uploadResults, getStudentResults, getMyResults,
  getStudentResultsPdf, getMyResultsPdf, updateResult, deleteResult,
};