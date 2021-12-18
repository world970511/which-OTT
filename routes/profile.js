import express from 'express';
import User from '../models/User.js';
import Cart from '../models/Cart.js';

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('./mypage.ejs');
});

router.get('/:nickname', (req, res) => {
  if (req.user.name !== req.params.nickname) {
    res.render(res.render('./mypage.ejs'), { isOwner: false });
  } else {
    res.render(res.render('./mypage.ejs'));
  }
});

router.get('/edit', (req, res) => {
  res.render('./profile.ejs', { name: req.user.name });
});

router.post('/edit', async (req, res) => {
  const { name } = req.body;
  const user = await User.updateOne(
    { id: req.user.id },
    {
      name,
    },
  );
  res.render('./mypage.ejs', { name: user.name });
});

router.post('/logout', async (req, res) => {
  req.cookies('token', null, {
    maxAge: 0,
  });
  res.render('./first');
});

router.get('/tranaction-list', async (req, res) => {
  const user = await User.findOne({ id: req.user.id });
  const posts = await post.find({ author: user }).populate('author');
  res.status(200).json({ list: posts });
});

router.get('/purchased-list', async (req, res) => {
  const user = await User.findOne({ id: req.user.id }).populate(
    'purchased_list',
  );
  res.status(200).json({ list: user.purchased_list });
});

router.get('/cart-list', async (req, res) => {
  const cart = await Cart.find({ user_id: req.user.id }).populate('posts');
  res.status(200).json({ list: cart.posts });
});

export default router;
