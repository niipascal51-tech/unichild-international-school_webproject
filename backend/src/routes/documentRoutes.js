const router = require('express').Router();
const { body, param, query, validationResult } = require('express-validator');
const c = require('../controllers/documentController');
const { authenticate, authorize } = require('../middleware/auth');
const { single } = require('../middleware/upload');

const CATEGORIES = ['about', 'admissions', 'fees', 'forms', 'other'];

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
  single('file', 10),
  [
    body('title').trim().notEmpty().isLength({ max: 150 }),
    body('category').isIn(CATEGORIES),
    body('description').optional().trim().isLength({ max: 500 }),
    validate,
  ],
  c.create
);

router.delete('/:id', authenticate, authorize('admin'), [param('id').isInt(), validate], c.remove);

module.exports = router;