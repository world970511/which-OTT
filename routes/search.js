import express from 'express';
import {
  searchPost,
  searchLocationPost,
  searchCategoryPost,
} from '../controllers/search.js';

const router = express.Router();

router.post('/', searchPost);
router.post('/location', searchLocationPost);
router.post('/category', searchCategoryPost);

export default router;
