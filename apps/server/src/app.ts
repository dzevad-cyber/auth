import express, { type Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { globalErrorHandler } from './globals/middlewares/error.handler.middleware.ts';
import { v1Router } from './api/v1.ts';
import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  }),
);
app.use(morgan('dev'));

app.use('/api/v1', v1Router);

app.all('/*notFoundRoutes', (req, res) => {
  res.status(404).send(`Not found ${req.originalUrl}`);
});

app.use(globalErrorHandler);

export const PORT = process.env['PORT'] ?? 5000;
export default app;
