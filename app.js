/* import */
import express from 'express';
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import signupRouter from './routes/signup.js';
import authRouter from './routes/auth.js';
import postRouter from './routes/post.js';
import cartRouter from './routes/cart.js';
import categoryhRouter from './routes//category.js';
import homeRouter from './routes/home.js';
import mypageRouter from './routes/mypage.js';
import passport from 'passport';
import passportInit from './passport/index.js';
import getUserFromJwt from './passport/middlewares/get-user-from-jwt.js';
import dotenv from 'dotenv';
import path from 'path';

passportInit();

/* setting */
dotenv.config();

const app = express();

const __dirname = path.resolve();
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static(__dirname + '/static'));

app.use(passport.initialize());
app.use(getUserFromJwt);

app.get('/login', (req, res) => res.render('./account/login'));
app.get('/signup', (req, res) => res.render('./account/signup'));
app.get('/mypage', (req, res) => res.render('./mypage'));
app.get('/product/post', (req, res) => res.render('./product/post'));
app.get('/product/detail', (req, res) => res.render('./product/detail'));
app.get('/chat', (req, res) => res.render('./chat-list'));
app.get('/category', (req, res) => res.render('./category'));

app.use('/mypage', mypageRouter);
app.use('/signup', signupRouter);
app.use('/posts', postRouter);
app.use('/auth', authRouter);
app.use('/cart', cartRouter);
app.use('/category', categoryhRouter);
app.use('/', homeRouter);

/* server */
const start = async () => {
  try {
    /* DB */
    await connectDB(process.env.MONGODB);
    app.listen(3000, () => {
      console.log(`Example app listening on port ${3000}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
