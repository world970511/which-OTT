import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  user_id: { type: String, required: true },
  pwd: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  posts: { type: [Schema.Types.ObjectId] },
  // cart: { type: [Schema.Types.ObjectId], ref: 'Post' },
  purchased_list: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  selled_list: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  user_thumnail: { type: String },
});

export default model('User', UserSchema);
