import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema',
  out: './drizzle',
  dbCredentials: {
    host: 'postgres',
    url: process.env['DATABASE_URL'],
  },
});
