import Post from '../models/Post.js';

export const searchPost = async (req, res) => {
  const { input } = req.body;
  console.log(req.user);

  // const posts = await Post.find({
  //   $and: [
  //     { location: req.user.location },
  //     { title: { $regex: input, $options: 'i' } },
  //   ],
  // });
  // res.status(200).json({ posts });
};

export const searchCategoryPost = async (req, res) => {
  const { input } = req.body;

  const posts = await Post.find({
    $and: [
      { location: req.user.location },
      { title: { $regex: input, $options: 'i' } },
    ],
  });

  res.status(200).json({ posts });
};
