const { Post } = require('../models');

const format = (p) => ({
  id: p.id,
  type: p.type,
  title: p.title,
  body: p.body,
  status: p.status,
  publishedAt: p.publishedAt,
  createdAt: p.createdAt,
  updatedAt: p.updatedAt,
});

const paging = (query) => ({
  limit: Math.min(parseInt(query.limit, 10) || 20, 100),
  offset: Math.max(parseInt(query.offset, 10) || 0, 0),
});

module.exports = (type) => {
  const listPublished = async (req, res) => {
    try {
      const rows = await Post.findAll({
        where: { type, status: 'published' },
        order: [['publishedAt', 'DESC']],
        ...paging(req.query),
      });
      res.json(rows.map(format));
    } catch (error) {
      res.status(500).json({ message: 'Could not fetch posts' });
    }
  };

  const getPublished = async (req, res) => {
    try {
      const post = await Post.findOne({
        where: { id: req.params.id, type, status: 'published' },
      });
      if (!post) return res.status(404).json({ message: 'Not found' });
      res.json(format(post));
    } catch (error) {
      res.status(500).json({ message: 'Could not fetch post' });
    }
  };

  const listAll = async (req, res) => {
    try {
      const rows = await Post.findAll({
        where: { type },
        order: [['createdAt', 'DESC']],
        ...paging(req.query),
      });
      res.json(rows.map(format));
    } catch (error) {
      res.status(500).json({ message: 'Could not fetch posts' });
    }
  };

  const create = async (req, res) => {
    try {
      const { title, body, status = 'draft' } = req.body;
      const post = await Post.create({
        type,
        title,
        body,
        status,
        publishedAt: status === 'published' ? new Date() : null,
        createdBy: req.user.id,
      });
      res.status(201).json(format(post));
    } catch (error) {
      res.status(500).json({ message: 'Could not create post' });
    }
  };

  const update = async (req, res) => {
    try {
      const post = await Post.findOne({ where: { id: req.params.id, type } });
      if (!post) return res.status(404).json({ message: 'Not found' });

      const { title, body, status } = req.body;
      if (title !== undefined) post.title = title;
      if (body !== undefined) post.body = body;
      if (status !== undefined && status !== post.status) {
        post.status = status;
        post.publishedAt = status === 'published' ? new Date() : null;
      }
      await post.save();
      res.json(format(post));
    } catch (error) {
      res.status(500).json({ message: 'Could not update post' });
    }
  };

  const remove = async (req, res) => {
    try {
      const post = await Post.findOne({ where: { id: req.params.id, type } });
      if (!post) return res.status(404).json({ message: 'Not found' });
      await post.destroy();
      res.json({ message: 'Deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Could not delete post' });
    }
  };

  return { listPublished, getPublished, listAll, create, update, remove };
};