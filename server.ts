/* eslint-disable no-magic-numbers */
import express, { Request, Response } from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const initializeDatabase = async () => {
  const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      birthDate TEXT,
      cameFrom TEXT,
      eventId INTEGER,
      FOREIGN KEY(eventId) REFERENCES events(id)
    )
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      eventDate TEXT,
      organizer TEXT
    )
  `);

  return db;
};

const dbPromise = initializeDatabase();

app.get('/events', async (_req: Request, res: Response) => {
  try {
    const db = await dbPromise;
    const events = await db.all('SELECT * FROM events');
    res.status(200).json(events);
  } catch (error: unknown) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.post('/register', async (req: Request, res: Response) => {
  const { name, email, birthDate, cameFrom, eventId } = req.body;
  console.log('Received registration data:', req.body);

  const db = await dbPromise;

  try {
    await db.run('INSERT INTO users (name, email, birthDate, cameFrom, eventId) VALUES (?, ?, ?, ?, ?)', [
      name,
      email,
      birthDate,
      cameFrom,
      eventId,
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

app.get('/registrations', async (req: Request, res: Response) => {
  const { eventId } = req.query;

  try {
    const db = await dbPromise;
    const users = await db.all('SELECT * FROM users WHERE eventId = ?', [eventId]);
    res.status(200).json(users);
  } catch (error: unknown) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
