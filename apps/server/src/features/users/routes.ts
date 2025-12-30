import express, { type Router } from 'express';
import { authenticateToken } from '../auth/middlewares/authenticateToken.ts';
import { getAllUsers } from './controllers/getAllUsers.ts';
import { getOneUser } from './controllers/getOneUser.ts';

export const usersRouter: Router = express.Router();

usersRouter.use(authenticateToken);

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getOneUser);
