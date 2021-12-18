import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

//홈화면에서 updateAt 순으로 게시물 나열
//loaclhost:3000 - get
router.get('/', async (req, res) => {
  const posts = await Post.find({}).sort({ updatedAt: 'desc' }).exec();

  res.status(200).json({ posts });
});

export default router;
