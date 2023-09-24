import express from 'express';
import { errorMiddleware } from './middlewares/error.middleware';
import eventRouter from './routes/event.route';
import loginRouter from './routes/login.route';
import registerRouter from './routes/register.route';
require('express-async-errors');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.json({ ok: true }));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/event', eventRouter);
app.use('/files', express.static('uploads'));

app.use(errorMiddleware);



export default app;