import mongoose from 'mongoose';

const { model, Schema } = mongoose;

const MessageSchema = new Schema(
  {
    conversationId: { type: Schema.Types.ObjectId, ref: 'Conversation' },
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    text: String,
  },
  { timestamps: true },
);

export default model('Message', MessageSchema);
