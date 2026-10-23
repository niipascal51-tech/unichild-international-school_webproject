const router = require('express').Router();
const { body, param, query, validationResult } = require('express-validator');
const { rateLimit } = require('express-rate-limit');
const c = require('../controllers/enquiryController');
const { authenticate, authorize } = require('../middleware/auth');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

const submitLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many enquiries. Please try again later.' },
});

router.post(
  '/',
  submitLimiter,
  [
    body('name').trim().notEmpty().isLength({ max: 100 }),
    body('email').trim().isEmail().isLength({ max: 150 }),
    body('phone').optional({ values: 'falsy' }).trim().isLength({ max: 30 }),
    body('subject').optional({ values: 'falsy' }).trim().isLength({ max: 150 }),
    body('message').trim().isLength({ min: 10, max: 2000 }),
    validate,
  ],
  c.submit
);

router.get(
  '/',
  authenticate,
  authorize('admin'),
  [query('status').optional().isIn(['new', 'read', 'resolved']), validate],
  c.list
);

router.patch(
  '/:id',
  authenticate,
  authorize('admin'),
  [param('id').isInt(), body('status').isIn(['new', 'read', 'resolved']), validate],
  c.setStatus
);

router.delete('/:id', authenticate, authorize('admin'), [param('id').isInt(), validate], c.remove);

module.exports = router;