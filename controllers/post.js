import postModel from '../models/Post.js';
import userModel from '../models/User.js';
import fs from 'fs';

export const postUpload = async (req, res, next) => {
  const { userId } = req.params;
  const { title, content, author, location, category, price } = req.body;
  const files = req.files;
  console.log(req.files);
  if (!files) {
    const err = new Error('선택된 파일이 없습니다.');
    return next(err);
  }

  const imageArray = files.map(file => file.path);

  const post = await postModel.create({
    author: userId,
    image: imageArray,
    title,
    content,
    location,
    category,
    price,
  });

  // const post2 = await postModel.findOne({ title }).populate('author').exec();
  res.status(200).json({ post });
};

export const postGetAll = async (req, res) => {
  //유저 아이디
  const { userId } = req.params;

  const posts = await postModel.find({ author: userId });

  res.status(200).json({ posts });
};

export const postGetOne = async (req, res) => {
  //게시물 아이디
  const { postId } = req.params;

  const post = await postModel.findOne({ _id: postId });

  res.status(200).json({ post });
};

export const postDelete = async (req, res) => {
  //게시물 아이디
  const { postId } = req.params;
  const { title } = req.body;

  const post = await postModel.findOneAndDelete({ _id: postId });

  res.status(200).json({ post });
};

export const postEdit = async (req, res) => {
  //게시물 아이디
  const { postId } = req.params;

  const post = await postModel.findOneAndUpdate({ _id: postId }, req.body, {
    new: true,
    upsert: true,
    timestamps: { createdAt: false, updatedAt: true },
  });

  res.status(200).json({ post });
};
