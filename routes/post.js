import express from 'express';
import store from '../passport/middlewares/multer.js';

import {
  postDelete,
  postEdit,
  postGetAll,
  postGetOne,
  postUpload,
} from '../controllers/post.js';

// const upload = multer({
//   dest: 'uploads/',
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

const router = express.Router();

// localhost:3000/post/:userId
router.route('/:userId').get(postGetAll);
router.post('/:userId', store.array('images', 5), postUpload);

// localhost:3000/post/:userId/:productId
router
  .route('/:userId/:postId')
  .get(postGetOne)
  .delete(postDelete)
  .patch(postEdit);

export default router;
