import postModel from '../models/Post.js';

export const postUpload = async (req, res) => {
  const { userId } = req.params;
  const { title, content, author, location, category, price } = req.body;
  console.log(req.body);
  const post = await postModel.create({
    title,
    content,
    author,
    location,
    category,
    price,
  });

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
  });

  res.status(200).json({ post });
};
