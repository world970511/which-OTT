import express from 'express';
import Cart from '../models/Cart.js';

const router = express.Router();

//결제 페이지
//loaclhost:3000/payment - post
router.post('/', async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.user_id });

  res.status(200).json({ cart });
});

//결제 페이지에서 구입취소 시
//localhost:3000/payment/edit - patch
router.patch('/edit', async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.user_id }, {}, {});
});

export default router;
