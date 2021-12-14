import express from 'express';
import connectDB from './db/connectDB.js';
import UserModel from './models/User.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/signup', async (req, res) => {
  const { user_id, pwd, name, email } = req.body;
  await UserModel.create({
    user_id,
    pwd,
    name,
    email,
  });
});

const start = async () => {
  try {
    await connectDB(process.env.MONGODB);
    app.listen(3000, () => {
      console.log(`Example app listening on port ${3000}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
