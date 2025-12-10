import app, { PORT } from './app.ts';
import { handleServerClose } from './lib/handle.server.close.ts';

process.on('uncaughtException', (err: Error) => {
  console.error('UNCAUGHT EXCEPTION! Server shutting down...');
  console.error(err.name, err.message);
  console.error(err.stack);

  process.exit(1);
});

export const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

process.on('unhandledRejection', (err: Error) => {
  console.error('UNHADLED REJECTION! Server shutting down...');
  console.error(err.name, err.message, err.stack);
  server.close(() => process.exit(1));
});

if (process.env.NODE_ENV === 'production') {
  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: Closing server');
    server.close(async (err) => handleServerClose(err));
  });

  process.on('SIGKILL', () => {
    console.log('SIGKILL signal received: Closing server');
    server.close(async (err) => handleServerClose(err));
  });
}
