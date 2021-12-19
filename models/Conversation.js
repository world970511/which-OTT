import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const { model, Schema } = mongoose;

const ConversationShema = new Schema(
  {
    id: { type: String, default: nanoid() },
    members: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

export default model('Conversation', ConversationShema);
