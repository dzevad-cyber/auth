import express, { type Router } from 'express';
import { login, register } from './controllers.ts';
import {
  validateLoginReqBody,
  validateRegisterReqBody,
} from './middlewares.ts';

export const authRouter: Router = express.Router();

authRouter.post('/register', [validateRegisterReqBody], register);
authRouter.post('/login', [validateLoginReqBody], login);
