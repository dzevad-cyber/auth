import express, { type Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { globalErrorHandler } from './globals/middlewares/error.handler.middleware.ts';
import v1Router from './api/v1.ts';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1', v1Router);

app.all('/*notFoundRoutes', (req, res) => {
  res.status(404).send(`Not found ${req.originalUrl}`);
});

app.use(globalErrorHandler);

export const PORT = process.env['PORT'] ?? 5000;
export default app;
