const router = require('express').Router();
const { body, param, query, validationResult } = require('express-validator');
const c = require('../controllers/galleryController');
const { authenticate, authorize } = require('../middleware/auth');
const { single } = require('../middleware/upload');

const CATEGORIES = ['building', 'events', 'activities', 'other'];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.get('/', [query('category').optional().isIn(CATEGORIES), validate], c.list);

router.post(
  '/',
  authenticate,
  authorize('admin'),
  single('file', 5),
  [
    body('caption').optional().trim().isLength({ max: 200 }),
    body('category').isIn(CATEGORIES),
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
    body('caption').optional().trim().isLength({ max: 200 }),
    body('category').optional().isIn(CATEGORIES),
    validate,
  ],
  c.update
);

router.delete('/:id', authenticate, authorize('admin'), [param('id').isInt(), validate], c.remove);

module.exports = router;