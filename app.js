/* import */
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

/* setting */
dotenv.config();

const app = express();
const __dirname = path.resolve();
app.set('view engine', 'ejs');

/* DB */


/* middle ware */
app.use(express.static(__dirname + '/static'));

/* main */
app.get('/', (req, res) => res.render('./home'));


/* router */


/* server */
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

