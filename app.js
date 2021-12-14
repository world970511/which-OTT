import express from 'express';
import connectDB from './db/connectDB.js';
import dotenv from 'dotenv';
import signupRouter from './routes/signup.js';
import authRouter from './routes/auth.js';
import passport from 'passport';
import passportInit from './passport/index.js';
import getUserFromJwt from './passport/middlewares/get-user-from-jwt.js';

dotenv.config();
const app = express();

passportInit();

app.use(passport.initialize());
app.use(getUserFromJwt);

app.use('/signup', signupRouter);
app.use('/auth', authRouter);

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
