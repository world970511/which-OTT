import Post from '../models/Post.js';

export const searchPost = async (req, res) => {
  const { input } = req.body;

  const posts = await Post.find({
    title: { $regex: input, $options: 'i' },
  });

  res.status(200).json({ posts });
};

export const searchLocationPost = async (req, res) => {
  const { input } = req.body;

  const posts = await Post.find({
    location: input,
  });

  res.status(200).json({ posts });
};

export const searchCategoryPost = async (req, res) => {
  const { input } = req.body;

  const posts = await Post.find({
    category: input,
  });

  res.status(200).json({ posts });
};
