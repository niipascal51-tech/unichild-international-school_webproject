const router = require('express').Router();
const { body, param, query, validationResult } = require('express-validator');
const c = require('../controllers/eventController');
const { authenticate, authorize } = require('../middleware/auth');

const CATEGORIES = ['academic', 'event', 'meeting', 'examination', 'admission', 'holiday'];
const DATE = /^\d{4}-\d{2}-\d{2}$/;

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.get(
  '/',
  [
    query('category').optional().isIn(CATEGORIES),
    query('from').optional().matches(DATE).isISO8601({ strict: true }),
    query('to').optional().matches(DATE).isISO8601({ strict: true }),
    validate,
  ],
  c.list
);
router.get('/:id', [param('id').isInt(), validate], c.getOne);

router.post(
  '/',
  authenticate,
  authorize('admin'),
  [
    body('title').trim().notEmpty().isLength({ max: 200 }),
    body('description').optional().trim(),
    body('category').isIn(CATEGORIES),
    body('startDate').matches(DATE).isISO8601({ strict: true }),
    body('endDate').optional().matches(DATE).isISO8601({ strict: true }),
    body('location').optional().trim().isLength({ max: 200 }),
    validate,
  ],
  c.create
);

router.patch(
  '/:id',
  authenticate,
  authorize('admin'),
  [
    param('id').isInt(),
    body('title').optional().trim().notEmpty().isLength({ max: 200 }),
    body('description').optional().trim(),
    body('category').optional().isIn(CATEGORIES),
    body('startDate').optional().matches(DATE).isISO8601({ strict: true }),
    body('endDate').optional().matches(DATE).isISO8601({ strict: true }),
    body('location').optional().trim().isLength({ max: 200 }),
    validate,
  ],
  c.update
);

router.delete('/:id', authenticate, authorize('admin'), [param('id').isInt(), validate], c.remove);

module.exports = router;