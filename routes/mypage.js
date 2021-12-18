import express from 'express';
import User from '../models/User.js';
import Cart from '../models/Cart.js';
import store from '../passport/middlewares/multer.js';

const router = express.Router();

//프로필 버튼 클릭 시
//localhost:3000/mypage - post
router.post('/:userId', async (req, res) => {
  //1 req.user에서 주기
  //2 DB에서 꺼내서 주기

  const { userId } = req.params;
  const cart = await Cart.findOne({ user_id: userId });
  const user = await User.findOne({ id });

  res.status(200).json({ user, cart });
});

//localhost:3000/mypage/edit - patch
router.patch('/:userId/edit', store.single('image'), async (req, res) => {
  const { input } = req.body;
  const files = req.file;
  console.log(req.user);

  const user = await User.findOneAndUpdate({
    ...input,
    user_thumnail: files ? files : null,
  });

  res.status(200).json(user);
});

export default router;
