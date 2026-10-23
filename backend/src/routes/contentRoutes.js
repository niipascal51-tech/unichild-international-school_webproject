const router = require('express').Router();
const { body, param, validationResult } = require('express-validator');
const c = require('../controllers/contentController');
const { authenticate, authorize } = require('../middleware/auth');
const { SECTIONS } = require('../utils/contentSections');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.get('/', c.getAll);
router.get('/:section', [param('section').isIn(SECTIONS), validate], c.getOne);

router.put(
  '/:section',
  authenticate,
  authorize('admin'),
  [
    param('section').isIn(SECTIONS),
    body('title').trim().notEmpty().isLength({ max: 200 }),
    body('body').trim().notEmpty(),
    body('data').optional().custom((v) => typeof v === 'object' && v !== null),
    validate,
  ],
  c.save
);

router.delete(
  '/:section',
  authenticate,
  authorize('admin'),
  [param('section').isIn(SECTIONS), validate],
  c.remove
);

module.exports = router;