import Post from '../models/Post.js';
import User from '../models/User.js';

export const addItemToCart = async (req, res) => {
  const postId = Number(req.params.postId);
  const post = await Post.findOne({ post_id: postId });
  const user_id = req.user.user_id;
  const user = await User.findOne({ user_id }).populate('cart');
  const filterdCart = user.cart.filter(post => post.post_id !== postId);
  const isClick = cartValidate(filterdCart, user.cart);

  if (cartValidate(filterdCart, user.cart)) {
    user.cart.push(post);
    post.like_num += 1;
  } else {
    user.cart = filterdCart;
    post.like_num -= 1;
  }

  await User.updateOne(
    { user_id },
    {
      cart: user.cart,
    },
  );

  await Post.updateOne(
    {
      post_id: postId,
    },
    {
      like_num: post.like_num,
    },
  );

  res.status(200).json({ isClick });
};

const cartValidate = (filterdCart, cart) => {
  return filterdCart.length === cart.length;
};

export const getItemList = async (req, res) => {
  const user_id = req.user.user_id;
  const user = await User.findOne({ user_id }).populate('cart');
  res.status(200).json({ cart: user.cart });
};
