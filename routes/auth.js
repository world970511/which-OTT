import express from 'express';
import passport from 'passport';
import { setUserToken } from '../utils/jwt.js';

const router = express.Router();

router.post(
  '/',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    console.log(1);
    setUserToken(res, req.user);
    res.redirect('/');
  },
);

export default router;