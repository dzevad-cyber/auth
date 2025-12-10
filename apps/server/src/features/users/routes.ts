import express, { type Router } from 'express';
import { getAllUsers, getOneUser } from './controllers.ts';

const usersRouter: Router = express.Router();

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getOneUser);

export default usersRouter;
