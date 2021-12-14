import express from 'express';
import connectDB from './db/connectDB.js';
import dotenv from 'dotenv';
import siginup from './routes/signup.js';

dotenv.config();
const app = express();

app.use('/signup', siginup);

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
