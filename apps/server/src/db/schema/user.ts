import * as p from 'drizzle-orm/pg-core';

export const usersTable = p.pgTable('users', {
  id: p.serial('id').primaryKey(),
  first_name: p.varchar().notNull(),
  last_name: p.varchar().notNull(),
  password: p.varchar().notNull(),
  email: p.varchar().unique(),
  password_confirm: p.varchar().notNull(),
  created_at: p.timestamp().defaultNow().notNull(),
  updated_at: p
    .timestamp('updated_at', { mode: 'date', precision: 3 })
    .$onUpdate(() => new Date()),
});
