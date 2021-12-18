import express from 'express';
import Post from '../models/Post.js';
import User from '../models/User.js';
import fs from 'fs';
import store from '../passport/middlewares/multer.js';
import { nanoid } from 'nanoid';

const router = express.Router();

//등록된 게시물 가져오기 (detail)
// localhost:3000/post/:postId -post
router.post('/:postId', async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findOne({ postId }).populate('author');
  const userInfo = await User.findOne({ user_id: post.author });
  res.status(200).json({ post, userInfo });
});

//게시물 생성
// localhost:3000/post -post
router.post('/', store.array('images', 5), async (req, res, next) => {
  const { title, content, location, category, price } = req.body;
  const files = req.files;
  console.log(req.user);
  console.log(req.body);
  // if (!files) {
  //   const err = new Error('선택된 파일이 없습니다.');
  //   return next(err);
  // }

  // const imageArray = files.map(file => file.path);
  const user = await User.findOne({ user_id: req.user.user_id });

  const post = await Post.create({
    // image: imageArray,
    title,
    content,
    location,
    category,
    price: price.replace(' 원', '').replace(' ,', ''),
    author: user,
    post_id: nanoid(),
    // post_thumnail: imageArray[0],
  });

  // console.log(post.author._id);
  // res.status(200).json({ post });
  res.render('./product/detail');
});

//게시물 삭제
//localhost:3000/post/:postId - delete
router.delete('/:postId', async (req, res) => {
  //게시물 아이디
  const { postId } = req.params;
  //작성자인지 인증 필요

  const post = await Post.findOneAndDelete({ _id: postId });

  res.status(200).json({ post });
});

//게시물 업데이트
//localhost:3000/post/:postId - patch
router.patch('/:postId', async (req, res) => {
  const { postId } = req.params;

  const post = await Post.findOneAndUpdate({ _id: postId }, req.body, {
    new: true,
    upsert: true,
    timestamps: { createdAt: false, updatedAt: true },
  });

  res.status(200).json({ post });
});

//판매완료 후 게시물 업데이트
router.patch('/:postId/soldout', async (req, res) => {
  const { postId } = req.params;

  const post = await Post.findOneAndUpdate(
    { _id: postId },
    { isSoldOut: true },
    {
      new: true,
      upsert: true,
      timestamps: { createdAt: false, updatedAt: true },
    },
  );

  res.status(200).json({ post });
});

//게시물 좋아요 업데이트
//localhost:3000/post/:postId/thums - patch
router.patch('/:postId/thums', async (req, res) => {
  const { postId } = req.params;

  // const post = await postModel.findOneAndUpdate(
  //   { _id: postId },
  //   { like_num: like_num + 1 },
  //   {
  //     new: true,
  //   },
  // );
  // res.status(200).json({ post });
});

export default router;
