import express, { type Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { globalErrorHandler } from './globals/middlewares/error.handler.middleware';
import { v1Router } from './api/v1';
import cookieParser from 'cookie-parser';
import { apiV1Paths } from '@auth/shared';

const app: Application = express();
const corsOptions = {
  origin: ['http://localhost:3000', 'http://192.168.0.25:8080'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(`/${apiV1Paths.basePath}`, v1Router);

app.all('/*notFoundRoutes', (req, res) => {
  res.status(404).json({
    message: `Not found ${req.originalUrl}`,
  });
});

app.use(globalErrorHandler);

export const PORT = process.env['PORT'] ?? 5000;
export default app;
