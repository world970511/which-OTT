import express from 'express';
import { searchPost, searchCategoryPost } from '../controllers/search.js';

const router = express.Router();

router.get('/', searchPost);
router.post('/category', searchCategoryPost);

export default router;
