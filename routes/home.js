import express from 'express';
import { homeGet } from '../controllers/home.js';

const router = express.Router();

router.route('/').get(homeGet);

export default router;
