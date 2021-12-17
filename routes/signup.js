import express from 'express';
import User from '../models/User.js';
import asyncHandler from '../utils/async-handler.js';
import getHash from '../utils/hash-password.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('./account/signup');
});

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { user_id, pwd, name, email } = req.body;
    const user = await User.create({
      user_id,
      pwd: getHash(pwd),
      name,
      email,
    });
    res.status(200).json({ user });
  }),
);

export default router;
