const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const c = require('../controllers/studentController');
const { authenticate, authorize } = require('../middleware/auth');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.use(authenticate);

router.get('/me', authorize('student'), c.getMyProfile);

router.post(
  '/',
  authorize('admin'),
  [
    body('firstName').notEmpty(),
    body('lastName').notEmpty(),
    body('dateOfBirth').isISO8601(),
    body('gender').isIn(['male', 'female']),
    body('className').notEmpty(),
    body('guardianName').notEmpty(),
    body('guardianPhone').notEmpty(),
    validate,
  ],
  c.registerStudent
);

router.get('/', authorize('admin', 'teacher'), c.listStudents);
router.get('/:id', authorize('admin', 'teacher', 'student'), c.getStudent);
router.patch('/:id/admit', authorize('admin'), c.admitStudent);
router.post(
  '/:id/account',
  authorize('admin'),
  [body('email').isEmail(), body('password').isLength({ min: 8 }), validate],
  c.createStudentAccount
);

module.exports = router;
