import express from 'express';
import { getSignup, postSignup } from '../controllers/signup.js';

const router = express.Router();

router.get('/', getSignup);
router.post('/', postSignup);

export default router;
