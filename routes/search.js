import express from 'express';
import { searchPost } from '../controllers/search.js';

const router = express.Router();

router.post('/', searchPost);

export default router;
