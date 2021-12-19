import Message from '../models/Message.js';
import express from 'express';

const router = express.Router();

router.post('/:conversation_id', async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);

    res.status(200).json({ newMessage });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/:conversation_id', async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversation_id,
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
