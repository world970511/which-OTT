import express from 'express';
import { getSignup, postSignup } from '../controllers/signup.js';

const router = express.Router();

router.route('/signup').get(getSignup).post(postSignup);

export default router;
