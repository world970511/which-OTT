import Post from '../models/Post.js';

export const homeGet = async (req, res) => {
  const posts = await Post.find({}).sort({ updatedAt: 'desc' }).exec();
  res.status(200).json({ posts });
};
