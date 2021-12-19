import Conversation from '../models/Conversation.js';
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

//새로운 대화창 생성.
router.post('/:user_id', async (req, res) => {
  const { user_id } = req.params;

  const seller = await User.findOne({
    id: user_id,
  });

  const buyer = await User.findOne({
    id: '123',
  });

  try {
    const newConversation = await Conversation.create({
      memebers: [seller, buyer],
    });

    console.log(newConversation);
    res.status(200).json({ newConversation });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// 생성된 대화창 데이터 가져오기
router.get('/:user_id', async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.user_id] },
    });
    res.status(200).json(conversation);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default router;
