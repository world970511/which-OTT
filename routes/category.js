import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

//localhost:3000/search/category/:카테고리명  - post
router.post('/:category', async (req, res) => {
  const { category } = req.params;

  const posts = await Post.find({
    $and: [{ location: req.user.location }, { category }],
  });

  res.render('./home.ejs', { posts });
});

export default router;
