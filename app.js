import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

/* 셋팅 */
dotenv.config();

const app = express();
const __dirname = path.resolve();

app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('./home'));

app.use(express.static(__dirname + '/static'));

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
