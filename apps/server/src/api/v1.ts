import express, { type Router } from 'express';
import usersRouter from '../features/users/routes.ts';
import healthRouter from '../globals/routes/health.router.ts';

const v1Router: Router = express.Router();

v1Router.use('/users', usersRouter);
v1Router.use('/health', healthRouter);

export default v1Router;
