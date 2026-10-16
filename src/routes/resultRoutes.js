const router = require('express').Router();
const { body, param, validationResult } = require('express-validator');
const c = require('../controllers/resultController');
const { authenticate, authorize } = require('../middleware/auth');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.use(authenticate);

router.post(
  '/',
  authorize('teacher', 'admin'),
  [
    body('subject').trim().notEmpty(),
    body('term').isIn(['First Term', 'Second Term', 'Third Term']),
    body('session').matches(/^\d{4}\/\d{4}$/),
    body('records').isArray({ min: 1 }),
    body('records.*.studentId').isInt(),
    body('records.*.score').isFloat({ min: 0, max: 100 }),
    validate,
  ],
  c.uploadResults
);

router.get('/me', authorize('student'), c.getMyResults);
router.get('/me/pdf', authorize('student'), c.getMyResultsPdf);
router.get('/student/:studentId', authorize('admin', 'teacher', 'student'), c.getStudentResults);
router.get('/student/:studentId/pdf', authorize('admin', 'teacher', 'student'), c.getStudentResultsPdf);

router.patch(
  '/:id',
  authorize('admin'),
  [param('id').isInt(), body('score').isFloat({ min: 0, max: 100 }), validate],
  c.updateResult
);
router.delete('/:id', authorize('admin'), [param('id').isInt(), validate], c.deleteResult);

module.exports = router;