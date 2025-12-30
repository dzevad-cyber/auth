import type { InferSelectModel } from 'drizzle-orm';
import * as p from 'drizzle-orm/pg-core';

export const UserTable = p.pgTable('users', {
  id: p.serial('id').primaryKey(),
  firstName: p.varchar('first_name', { length: 30 }).notNull(),
  lastName: p.varchar('last_name', { length: 30 }).notNull(),
  email: p.varchar().unique(),
  password: p.varchar().notNull(),
  createdAt: p.timestamp('created_at').defaultNow().notNull(),
  updatedAt: p
    .timestamp('updated_At', { mode: 'date', precision: 3 })
    .$onUpdate(() => new Date()),
  refreshToken: p.varchar(),
});

export type User = InferSelectModel<typeof UserTable>;
