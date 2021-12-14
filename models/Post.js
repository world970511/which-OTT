import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PostSchema = new Schema({
  author: { type: Schema.ObjectId },
  title: { type: String, required: true },
  location: { type: Array, required: true },
  content: { type: String, required: true },
  category: { type: Array, required: true },
  createAt: { type: Date, required: true },
  price: { type: Number, required: true },
  like_num: { type: [Number], required: true },
  isSoldOut: { type: Boolean, required: true },
  updatedAt: { type: Date },
});

export default model('PostSchema', PostSchema);
