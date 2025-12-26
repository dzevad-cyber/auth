import * as p from 'drizzle-orm/pg-core';

export const usersTable = p.pgTable('users', {
  id: p.serial('id').primaryKey(),
  firstName: p.varchar('first_name', { length: 30 }).notNull(),
  lastName: p.varchar('last_name', { length: 30 }).notNull(),
  email: p.varchar().unique(),
  password: p.varchar('password', { length: 50 }).notNull(),
  passwordConfirm: p.varchar('password_confirm', { length: 50 }).notNull(),
  createdAt: p.timestamp().defaultNow().notNull(),
  updatedAt: p
    .timestamp('updated_at', { mode: 'date', precision: 3 })
    .$onUpdate(() => new Date()),
});
