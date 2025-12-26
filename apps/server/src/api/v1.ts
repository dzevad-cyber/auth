import express, { type Router } from 'express';
import { usersRouter } from '../features/users/routes.ts';
import { healthRouter } from '../globals/routes/health.router.ts';
import { authRouter } from '../features/auth/routes.ts';

export const v1Router: Router = express.Router();

v1Router.use('/users', usersRouter);
v1Router.use('/health', healthRouter);
v1Router.use('/auth', authRouter);
