import express from 'express';
import Post from '../models/Post.js';
import User from '../models/User.js';
import fs from 'fs';
import store from '../passport/middlewares/multer.js';

const router = express.Router();

//등록된 게시물 가져오기 (detail)
// localhost:3000/post/:postId -post
router.get('/:post_id', async (req, res) => {
  const { post_id } = req.params;
  const post = await Post.findOne({ id: post_id }).populate('author');

  res.status(200).json({ post });
});

//게시물 생성
// localhost:3000/post -post
router.post('/new', store.array('images', 5), async (req, res, next) => {
  const { title, content, location, category, price } = req.body;
  const files = req.files;
  // if (!files) {
  //   const err = new Error('선택된 파일이 없습니다.');
  //   return next(err);
  // }

  // const imageArray = files.map(file => file.path);
  const user = await User.findOne({ id: req.user.id });

  const post = await Post.create({
    // image: imageArray,
    title,
    content,
    location,
    category,
    price,
    author: user,
    // post_thumnail: imageArray[0],
  });

  res.status(200).json({ post });
});

//게시물 삭제
//localhost:3000/post/:postId - delete
router.post('/:post_id/delete', async (req, res) => {
  //게시물 아이디
  const { post_id } = req.params;
  //작성자인지 인증 필요

  const post = await Post.findOneAndDelete({ id: post_id });

  res.status(200).json({ post });
  res.redirect('http://localhost:3000/');
});

//게시물 업데이트
//localhost:3000/post/:postId - patch
router.patch('/:post_id/edit', async (req, res) => {
  const { post_id } = req.params;

  const post = await Post.findOneAndUpdate({ id: post_Id }, req.body, {
    new: true,
    upsert: true,
    timestamps: { createdAt: false, updatedAt: true },
  });

  res.status(200).json({ post });
  res.redirect(`/${post_id}`);
});

//판매완료 후 게시물 업데이트
router.patch('/:post_id/soldout', async (req, res) => {
  const { post_id } = req.params;

  const post = await Post.findOneAndUpdate(
    { id: post_id },
    { isSoldOut: true },
    {
      new: true,
      upsert: true,
      timestamps: { createdAt: false, updatedAt: true },
    },
  );

  res.status(200).json({ post });
});

export default router;
