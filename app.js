/* import */
import express from 'express';
import connectDB from './db/connectDB.js';
import dotenv from 'dotenv';
import siginup from './routes/signup.js';
import post from './routes/post.js';
import path from 'path';

dotenv.config();

const __dirname = path.resolve();

app.set('view engine', 'ejs');

/* middle ware */
app.use(express.static(__dirname + '/static'));

/* main */
app.get('/', (req, res) => res.render('./home'));

const app = express();

app.use(express.json());
app.use('/signup', siginup);
app.use('/post', post);

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
