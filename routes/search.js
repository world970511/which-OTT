import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

//localhost:3000/search - post
router.post('/', async (req, res) => {
  const { input } = req.body;

  const posts = await Post.find({
    $and: [
      // { location: req.user.location },
      { title: { $regex: `${input}`, $options: 'i' } },
    ],
  });
  res.status(200).json({ posts });
});

//localhost:3000/search/category/:카테고리명  - post
router.post('/category/:category', async (req, res) => {
  const { category } = req.params;

  const posts = await Post.find({
    $and: [{ location: req.user.location }, { category }],
  });

  res.status(200).json({ posts });
});

export default router;
