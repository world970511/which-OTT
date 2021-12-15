import express from 'express';
import connectDB from './db/connectDB.js';
import dotenv from 'dotenv';
import siginup from './routes/signup.js';
import post from './routes/post.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/signup', siginup);
app.use('/post', post);

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
