import express from 'express';
import { addItemToCart, getItemList } from '../controllers/cart.js';
const router = express.Router();

router.post('/:postId', addItemToCart);

router.get('/', getItemList);

export default router;
