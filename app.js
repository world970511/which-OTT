/* import */
import express from 'express';
import connectDB from './db/connectDB.js';
import dotenv from 'dotenv';
import signupRouter from './routes/signup.js';
import authRouter from './routes/auth.js';
import passport from 'passport';
import passportInit from './passport/index.js';
import getUserFromJwt from './passport/middlewares/get-user-from-jwt.js';
import dotenv from 'dotenv';
import path from 'path';

/* setting */
dotenv.config();

const app = express();

passportInit();

const __dirname = path.resolve();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

app.use(passport.initialize());
app.use(getUserFromJwt);

app.get('/', (req, res) => res.render('./home'));

app.use('/signup', signupRouter);
app.use('/auth', authRouter);



/* server */
const start = async () => {
  try {
    await connectDB(process.env.DB);
    app.listen(process.env.port, () => {
      console.log(`Example app listening on port ${process.env.port}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
