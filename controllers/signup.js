import UserModel from '../models/User.js';
import asyncHandler from '../utils/async-handler.js';
import getHash from '../utils/hash-password.js';

export const postSignup = asyncHandler(async (req, res) => {
  const { user_id, pwd, name, email } = req.body;
  const user = await UserModel.create({
    user_id,
    pwd: getHash(pwd),
    name,
    email,
  });
  res.status(200).json({ user });
});

export const getSignup = (req, res) => {
  console.log(req.user);
  res.render('./account/signup');
};
