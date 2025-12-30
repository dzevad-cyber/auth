import express, { type Router } from 'express';
import {
  validateLoginReqBody,
  validateRegisterReqBody,
} from './middlewares.ts';
import { register } from './controllers/register.ts';
import { login } from './controllers/login.ts';
import { getAuthenticatedUser } from './controllers/getAuthUser.ts';

export const authRouter: Router = express.Router();

authRouter.post('/register', [validateRegisterReqBody], register);
authRouter.post('/login', [validateLoginReqBody], login);
authRouter.get('/user', getAuthenticatedUser);
