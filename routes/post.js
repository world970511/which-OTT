import express from 'express';
import {
  postDelete,
  postEdit,
  postGetAll,
  postGetOne,
  postUpload,
} from '../controllers/post.js';

const router = express.Router();

// localhost:3000/post/:userId
router.route('/:userId').get(postGetAll).post(postUpload);

// localhost:3000/post/:userId/:productId
router
  .route('/:userId/:postId')
  .get(postGetOne)
  .delete(postDelete)
  .patch(postEdit);

export default router;
