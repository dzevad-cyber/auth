import express, { type Router } from 'express';

export const healthRouter: Router = express.Router();

healthRouter.get('/', async (_req, res) => {
  return res.status(200).json({
    status: 200,
  });
});
