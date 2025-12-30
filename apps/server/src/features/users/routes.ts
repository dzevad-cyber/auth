import express, { type Router } from 'express';
import { getAllUsers, getOneUser } from './controllers.ts';
import { authenticateToken } from '../auth/middlewares.ts';

export const usersRouter: Router = express.Router();

usersRouter.use(authenticateToken);

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getOneUser);
