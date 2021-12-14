import express from 'express';
import { getSignin, postSignin } from '../controllers/signin';

const router = express.Router();

router.route('/signin').get(getSignin).post(postSignin);

export default router;
