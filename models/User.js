import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  user_id: { type: String, required: true },
  pwd: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  star: { type: Number, default: 0 },
  cart: { type: [Schema.ObjectId] },
  purchased_list: { type: [Schema.ObjectId] },
  selled_list: { type: [Schema.ObjectId] },
});

export default model('UserSchema', UserSchema);
