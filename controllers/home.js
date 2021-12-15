import PostModel from '../models/Post.js';

export const homeGet = async (req, res) => {
  const posts = await PostModel.find({});

  res.status(200).json({ posts });
};
