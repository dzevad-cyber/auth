import express, { type Router } from 'express';
import { usersRouter } from '../features/users/routes';
import { healthRouter } from '../globals/routes/health.router';
import { authRouter } from '../features/auth/routes';
import { apiV1Paths } from '@auth/shared';

const { users, health, auth } = apiV1Paths;

export const v1Router: Router = express.Router();

v1Router.use(`/${users.basePath}`, usersRouter);
v1Router.use(`/${health.basePath}`, healthRouter);
v1Router.use(`/${auth.basePath}`, authRouter);
