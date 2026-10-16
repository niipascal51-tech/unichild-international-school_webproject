const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { register, login } = require('../controllers/authController');
const { authenticate, authorize } = require('../middleware/auth');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.post(
  '/login',
  [body('email').isEmail(), body('password').notEmpty(), validate],
  login
);

router.post(
  '/register',
  authenticate,
  authorize('admin'),
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 8 }),
    body('role').isIn(['admin', 'teacher', 'student']),
    validate,
  ],
  register
);

module.exports = router;