import express from 'express';
import dotenv from "dotenv";
import signUpRouter from './routes/signup';

/* 셋팅 */
dotenv.config();

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/signup', signUpRouter);
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));
