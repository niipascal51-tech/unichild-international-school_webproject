const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const c = require('../controllers/teacherController');
const { authenticate, authorize } = require('../middleware/auth');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.use(authenticate);

router.get('/me', authorize('teacher'), c.getMyProfile);

router.post(
  '/',
  authorize('admin'),
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 8 }),
    body('phone').notEmpty(),
    body('subjects').optional().isArray(),
    body('assignedClasses').optional().isArray(),
    validate,
  ],
  c.createTeacher
);

router.get('/', authorize('admin'), c.listTeachers);
router.get('/:id', authorize('admin', 'teacher'), c.getTeacher);

router.patch(
  '/:id',
  authorize('admin'),
  [
    body('subjects').optional().isArray(),
    body('assignedClasses').optional().isArray(),
    validate,
  ],
  c.updateTeacher
);

module.exports = router;
