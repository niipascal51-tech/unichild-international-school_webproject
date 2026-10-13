const express = require('express');
const { body, param, validationResult } = require('express-validator');
const makeController = require('../controllers/postController');
const { authenticate, authorize } = require('../middleware/auth');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

module.exports = (type) => {
  const router = express.Router();
  const c = makeController(type);

  router.get('/', c.listPublished);
  router.get('/admin/all', authenticate, authorize('admin'), c.listAll);
  router.get('/:id', [param('id').isInt(), validate], c.getPublished);

  router.post(
    '/',
    authenticate,
    authorize('admin'),
    [
      body('title').trim().notEmpty().isLength({ max: 200 }),
      body('body').trim().notEmpty(),
      body('status').optional().isIn(['draft', 'published']),
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
      body('body').optional().trim().notEmpty(),
      body('status').optional().isIn(['draft', 'published']),
      validate,
    ],
    c.update
  );

  router.delete('/:id', authenticate, authorize('admin'), [param('id').isInt(), validate], c.remove);

  return router;
};