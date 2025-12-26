import express, { type Router } from 'express';
import { getAllUsers, getOneUser } from './controllers.ts';

export const usersRouter: Router = express.Router();

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getOneUser);
