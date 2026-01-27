import express, { type Router } from 'express';
import { authenticateToken } from '../auth/middlewares/authenticateToken';
import { getAllUsers } from './controllers/getAllUsers';
import { getOneUser } from './controllers/getOneUser';

export const usersRouter: Router = express.Router();

usersRouter.use(authenticateToken);

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getOneUser);
