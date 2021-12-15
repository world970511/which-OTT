import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    location: { type: Array, required: true },
    content: { type: String, required: true },
    category: { type: Array, required: true },
    price: { type: Number, required: true },
    like_num: { type: Number },
    isSoldOut: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default model('Post', PostSchema);
