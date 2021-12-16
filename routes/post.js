import express from 'express';
import multer from 'multer';
import {
  postDelete,
  postEdit,
  postGetAll,
  postGetOne,
  postUpload,
} from '../controllers/post.js';

const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 },
});

const router = express.Router();

// localhost:3000/post/:userId
router
  .route('/:userId', upload.array('image', 5))
  .get(postGetAll)
  .post(postUpload);

// localhost:3000/post/:userId/:productId
router
  .route('/:userId/:postId')
  .get(postGetOne)
  .delete(postDelete)
  .patch(postEdit);

export default router;
