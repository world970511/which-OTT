import express from 'express';
import { searchPost, searchCategoryPost } from '../controllers/search.js';

const router = express.Router();

router.post('/', searchPost);
router.post('/search/category/:category', searchCategoryPost);

export default router;
