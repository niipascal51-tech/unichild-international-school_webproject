const multer = require('multer');

const single = (field, maxMb) => {
  const parser = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: maxMb * 1024 * 1024, files: 1 },
  }).single(field);

  return (req, res, next) => {
    parser(req, res, (err) => {
      if (!err) return next();
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(413).json({ message: `File too large (max ${maxMb} MB)` });
      }
      res.status(400).json({ message: 'Upload failed' });
    });
  };
};

module.exports = { single };