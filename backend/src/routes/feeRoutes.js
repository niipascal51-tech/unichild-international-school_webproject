const router = require('express').Router();
const { body, param, validationResult } = require('express-validator');
const c = require('../controllers/feeController');
const { authenticate, authorize } = require('../middleware/auth');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.use(authenticate);

router.get('/me', authorize('student'), c.getMyFees);

router.get('/', authorize('admin'), c.listFees);
router.get('/student/:studentId', authorize('admin'), [param('studentId').isInt(), validate], c.getStudentFees);

router.put(
  '/student/:studentId',
  authorize('admin'),
  [
    param('studentId').isInt(),
    body('term').isIn(['First Term', 'Second Term', 'Third Term']),
    body('session').matches(/^\d{4}\/\d{4}$/),
    body('status').isIn(['owing', 'not_owing']),
    body('amountOwed').optional().isFloat({ min: 0 }),
    body('note').optional().isLength({ max: 255 }),
    validate,
  ],
  c.setFee
);

router.delete('/:id', authorize('admin'), [param('id').isInt(), validate], c.deleteFee);

module.exports = router;