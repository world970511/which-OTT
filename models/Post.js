import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
autoIncrement.initialize(mongoose.connection);

const { Schema, model } = mongoose;

const PostSchema = new Schema({
  post_id: { type: Number, default: 0 },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  location: { type: Array, required: true },
  image: { type: [String] },
  content: { type: String, required: true },
  category: { type: Array, required: true },
  price: { type: Number, required: true },
  like_num: { type: Number, default: 0 },
  isSoldOut: { type: Boolean, default: false },
});

PostSchema.plugin(autoIncrement.plugin, {
  model: 'Post',
  field: 'post_id',
  startAt: 1,
  increment: 1,
});

export default model('Post', PostSchema);
