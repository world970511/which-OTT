/* import */
import express from 'express';
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import signupRouter from './routes/signup.js';
import authRouter from './routes/auth.js';
import postRouter from './routes/post.js';
import cartRouter from './routes/cart.js';
import searchRouter from './routes/search.js';
import homeRouter from './routes/home.js';
import passport from 'passport';
import passportInit from './passport/index.js';
import getUserFromJwt from './passport/middlewares/get-user-from-jwt.js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import multer from 'multer';

passportInit();

/* setting */
dotenv.config();

const app = express();

const __dirname = path.resolve();
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/static'));

app.use(passport.initialize());
app.use(getUserFromJwt);

app.use('/signup', signupRouter);
app.use('/post', postRouter);
app.use('/auth', authRouter);
app.use('/cart', cartRouter);
app.use('/search', searchRouter);

app.use('/', homeRouter);

app.get('/', (req, res) => res.render('./home'));
app.get('/login', (req, res) => res.render('./account/login'));
app.get('/signup', (req, res) => res.render('./account/signup'));
app.get('/mypage', (req, res) => res.render('./mypage'));
app.get('/post', (req, res) => res.render('./product/post'));
app.get('/detail', (req, res) => res.render('./product/detail'));
app.get('/chat', (req, res) => res.render('./chat-list'));
app.get('/category', (req, res) => res.render('./category'));


/* server */
const start = async () => {
  try {
    /* DB */
    await connectDB(process.env.MONGODB);
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
