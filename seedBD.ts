const { mockEvents } = require('./src/mockData/mockEvents');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');
const seedEvents = () => {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        eventDate TEXT,
        organizer TEXT
      )
    `);

    const stmt = db.prepare('INSERT INTO events (title, description, eventDate, organizer) VALUES (?, ?, ?, ?)');

    mockEvents.forEach((event) => {
      stmt.run(event.title, event.description, event.eventDate, event.organizer);
    });

    stmt.finalize();
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Events have been added to the database');
    }
  });
};

seedEvents();
