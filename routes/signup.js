import express from 'express';
import User from '../models/User.js';
import asyncHandler from '../utils/async-handler.js';
import getHash from '../utils/hash-password.js';
import crypto from 'crypto';

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('./account/signup');
});

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { id, pwd, name, email } = req.body;
    const user = await User.create({
      id,
      pwd: getHash(pwd),
      name,
      email,
    });
    res.status(200).json({ user });
  }),
);

export default router;
