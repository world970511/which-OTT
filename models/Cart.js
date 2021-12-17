import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const CartSchema = new Schema({
  user_id: { type: Number, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

export default model('Cart', CartSchema);
