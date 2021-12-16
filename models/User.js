import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  user_id: { type: String, required: true, ref: 'Post' },
  pwd: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  location: { type: String, required: true },
  star: { type: Number, default: 0 },
  cart: { type: [Schema.Types.ObjectId], ref: 'Post' },
  purchased_list: { type: [Schema.Types.ObjectId], ref: 'Post' },
  selled_list: { type: [Schema.Types.ObjectId], ref: 'Post' },
});

export default model('User', UserSchema);
