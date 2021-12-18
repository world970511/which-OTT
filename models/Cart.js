import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const CartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    post: [
      {
        postId: Schema.Types.ObjectId,
        title: String,
        price: Number,
      },
    ],
  },
  { timestamps: true },
);

export default model('Cart', CartSchema);
