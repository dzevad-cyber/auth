import { pool } from '../db/db.ts';
import { server } from '../server.ts';

export const handleServerClose = async (err?: Error) => {
  console.log('err:', err);

  if (err) {
    console.error('Error during server shutdown: ', err);
    process.exit(1);
  }

  console.log('Server closed. Closing database.');

  try {
    await pool.end();
    console.log('Database closed.');
    return process.exit(0);
  } catch (err) {
    console.error('Error while closing database: ', err);
    process.exit(1);
  }
};
