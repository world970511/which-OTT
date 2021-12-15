import PostModel from '../models/Post.js';

export const searchPost = async (req, res) => {
  const { input } = req.body;

  const posts = await PostModel.find({
    title: { $regex: input, $options: 'i' },
  });

  res.status(200).json({ posts });
};
