import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PostSchema = new Schema({
  post_id: { type: Number, default: 0 },
  author: { type: String, ref: 'User' },
  title: { type: String, required: true },
  location: { type: Array, required: true },
  image: { type: [String] },
  content: { type: String, required: true },
  category: { type: Array, required: true },
  price: { type: Number, required: true },
  like_num: { type: Number, default: 0 },
  isSoldOut: { type: Boolean, default: false },
  post_thumnail: { type: String },
});

export default model('Post', PostSchema);
