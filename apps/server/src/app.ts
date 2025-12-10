import express, { type Application } from 'express';
import cors from 'cors';
import * as z from 'zod';
import { AppError } from './services/errors/appError.ts';
import { globalErrorHandler } from './globals/middlewares/error.handler.middleware.ts';
import { db } from './db/db.ts';
import { usersTable } from './db/schema/user.ts';
import { eq } from 'drizzle-orm';
import v1Router from './api/v1.ts';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', v1Router);

app.all('/*notFoundRoutes', (req, res) => {
  res.status(404).send(`Not found ${req.originalUrl}`);
});

app.use(globalErrorHandler);

export const PORT = process.env['PORT'] ?? 5000;
export default app;

const ReqBodySchema = z
  .object({
    first_name: z.string(),
    last_name: z.string(),
    password: z.string(),
    password_confirm: z.string(),
  })
  .partial();

const ReqParamsSchema = z.object({
  id: z.string(),
});
