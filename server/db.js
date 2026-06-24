import fs from 'fs';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
const dbPath = path.join(dataDir, 'reviews.sqlite');

export function getDb() {
  const db = new Database(dbPath);
  db.pragma('journal_mode = WAL');
  db.exec(`
    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      google_sub TEXT NOT NULL,
      name TEXT,
      email TEXT,
      picture TEXT,
      rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
      text TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_reviews_created ON reviews(created_at DESC);

    CREATE TABLE IF NOT EXISTS enquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT,
      email TEXT NOT NULL,
      service TEXT,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_enquiries_created ON enquiries(created_at DESC);
  `);
  return db;
}

export function seedIfEmpty(db) {
  const row = db.prepare('SELECT COUNT(*) AS c FROM reviews').get();
  if (row.c > 0) return;
  const ins = db.prepare(
    `INSERT INTO reviews (google_sub, name, email, picture, rating, text)
     VALUES (@google_sub, @name, @email, @picture, @rating, @text)`
  );
  const samples = [
    {
      google_sub: 'seed-1',
      name: 'Priya Sharma',
      email: 'Delighted Customer',
      picture: '',
      rating: 5,
      text:
        'Kovai Digital Projectors exceeded all our expectations! Their attention to detail and creative event planning made our annual function absolutely magical. The LED wall setup was flawless.',
    },
    {
      google_sub: 'seed-2',
      name: 'Arjun Patel',
      email: 'Satisfied Client',
      picture: '',
      rating: 5,
      text:
        'Outstanding service for our corporate event! The team handled everything professionally, from AV equipment to stage setup. Their technical expertise made the entire process seamless.',
    },
    {
      google_sub: 'seed-3',
      name: 'Anjali Desai',
      email: 'Happy Customer',
      picture: '',
      rating: 5,
      text:
        "We chose Kovai Digitals for our daughter's engagement. The projector setup and sound system were perfect, and their decoration team created a beautiful ambiance.",
    },
    {
      google_sub: 'seed-4',
      name: 'Rajesh Iyer',
      email: 'Repeat Customer',
      picture: '',
      rating: 5,
      text:
        "Second time working with them — they've maintained excellent standards! Furniture and LED arrangements for our family function were perfect. Always punctual and professional.",
    },
  ];
  const tx = db.transaction(() => {
    for (const s of samples) ins.run(s);
  });
  tx();
}
