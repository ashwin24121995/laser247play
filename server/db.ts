import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from '../drizzle/schema';

const DATABASE_URL = process.env.DATABASE_URL || 'mysql://placeholder:placeholder@localhost:3306/placeholder';

// Create connection pool for serverless
const pool = mysql.createPool({
  uri: DATABASE_URL,
  connectionLimit: 1,
});

export const db = drizzle(pool, { schema, mode: 'default' });
