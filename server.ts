/* eslint-disable no-magic-numbers */
import express, { Request, Response } from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// SQLite database connection
const initializeDatabase = async () => {
  const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  });

  await db.exec('DROP TABLE IF EXISTS users');

  await db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    birthDate TEXT,
    cameFrom TEXT
  )
`);
  console.log('Database initialized and users table created.');

  return db;
};

const dbPromise = initializeDatabase();

// User registration route
app.post('/register', async (req: Request, res: Response) => {
  const { name, email, birthDate, cameFrom } = req.body;
  console.log('Received registration data:', req.body);

  const db = await dbPromise;
  const users = await db.all('SELECT * FROM users');
  console.log('Current users in the database:', users);

  try {
    await db.run('INSERT INTO users (name, email, birthDate, cameFrom) VALUES (?, ?, ?, ?)', [
      name,
      email,
      birthDate,
      cameFrom,
    ]);
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      const sqliteError = error as { code?: string };
      if (sqliteError.code === 'SQLITE_CONSTRAINT') {
        res.status(400).json({ error: 'Email already exists.' });
      } else {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
      }
    } else {
      console.error('Unexpected error:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
