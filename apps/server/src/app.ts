import express, { type Application } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get('/health', async (req, res) => {
  return res.status(200).json({
    status: 200,
  });
});

app.all('/*notFoundRoutes', (req, res) => {
  res.status(404).send(`Not found ${req.originalUrl}`);
});

export const PORT = process.env['PORT'] ?? 5000;
export default app;
