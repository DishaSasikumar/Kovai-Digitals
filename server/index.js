import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { OAuth2Client } from 'google-auth-library';
import { getDb, seedIfEmpty } from './db.js';

const PORT = process.env.PORT || 8787;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const ADMIN_KEY = process.env.ADMIN_KEY || '';

function requireAdmin(req, res) {
  const key = req.headers['x-admin-key'] || req.query.key;
  if (!ADMIN_KEY || key !== ADMIN_KEY) {
    res.status(401).json({ error: 'Unauthorized. Invalid admin key.' });
    return false;
  }
  return true;
}

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '64kb' }));

const db = getDb();
seedIfEmpty(db);

const oauthClient = GOOGLE_CLIENT_ID ? new OAuth2Client(GOOGLE_CLIENT_ID) : null;

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, googleConfigured: Boolean(GOOGLE_CLIENT_ID) });
});

app.get('/api/reviews', (_req, res) => {
  try {
    const rows = db
      .prepare(
        `SELECT id, name, email, picture, rating, text, created_at AS createdAt
         FROM reviews ORDER BY datetime(created_at) DESC LIMIT 100`
      )
      .all();
    res.json({ reviews: rows });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to load reviews' });
  }
});

app.post('/api/reviews', async (req, res) => {
  const { credential, rating, text } = req.body || {};
  const r = Number(rating);
  const bodyText = typeof text === 'string' ? text.trim() : '';

  if (!bodyText || bodyText.length < 8) {
    return res.status(400).json({ error: 'Review must be at least 8 characters.' });
  }
  if (!Number.isInteger(r) || r < 1 || r > 5) {
    return res.status(400).json({ error: 'Rating must be between 1 and 5.' });
  }

  if (!GOOGLE_CLIENT_ID || !oauthClient) {
    return res.status(503).json({
      error:
        'Google sign-in is not configured on the server. Set GOOGLE_CLIENT_ID in server/.env',
    });
  }

  if (!credential || typeof credential !== 'string') {
    return res.status(401).json({ error: 'Missing Google credential.' });
  }

  try {
    const ticket = await oauthClient.verifyIdToken({
      idToken: credential,
      audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (!payload?.sub) {
      return res.status(401).json({ error: 'Invalid Google token.' });
    }

    const google_sub = payload.sub;
    const name = payload.name || '';
    const email = payload.email || '';
    const picture = payload.picture || '';

    const info = db
      .prepare(
        `INSERT INTO reviews (google_sub, name, email, picture, rating, text)
         VALUES (?, ?, ?, ?, ?, ?)`
      )
      .run(google_sub, name, email, picture, r, bodyText);

    const row = db
      .prepare(
        `SELECT id, name, email, picture, rating, text, created_at AS createdAt
         FROM reviews WHERE id = ?`
      )
      .get(info.lastInsertRowid);

    res.status(201).json({ review: row });
  } catch (e) {
    console.error(e);
    res.status(401).json({ error: 'Could not verify Google account. Please sign in again.' });
  }
});

app.post('/api/enquiries', (req, res) => {
  const { name, email, phone, service, message } = req.body || {};
  const cleanName = typeof name === 'string' ? name.trim() : '';
  const cleanEmail = typeof email === 'string' ? email.trim() : '';
  const cleanPhone = typeof phone === 'string' ? phone.trim() : '';
  const cleanService = typeof service === 'string' ? service.trim() : '';
  const cleanMessage = typeof message === 'string' ? message.trim() : '';

  if (!cleanName || cleanName.length < 2) {
    return res.status(400).json({ error: 'Please enter your name.' });
  }
  if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return res.status(400).json({ error: 'Please enter a valid email.' });
  }
  if (!cleanPhone || cleanPhone.length < 8) {
    return res.status(400).json({ error: 'Please enter a valid phone number.' });
  }
  if (!cleanMessage || cleanMessage.length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters.' });
  }

  try {
    const info = db
      .prepare(
        `INSERT INTO enquiries (name, phone, email, service, message)
         VALUES (?, ?, ?, ?, ?)`
      )
      .run(cleanName, cleanPhone, cleanEmail, cleanService, cleanMessage);

    const row = db
      .prepare(
        `SELECT id, name, phone, email, service, message, created_at AS createdAt
         FROM enquiries WHERE id = ?`
      )
      .get(info.lastInsertRowid);

    res.status(201).json({ ok: true, enquiry: row });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to save enquiry.' });
  }
});

app.get('/api/enquiries', (req, res) => {
  if (!requireAdmin(req, res)) return;

  try {
    const rows = db
      .prepare(
        `SELECT id, name, phone, email, service, message, created_at AS createdAt
         FROM enquiries ORDER BY datetime(created_at) DESC LIMIT 500`
      )
      .all();
    res.json({ enquiries: rows });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to load enquiries.' });
  }
});

app.delete('/api/enquiries/:id', (req, res) => {
  if (!requireAdmin(req, res)) return;

  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: 'Invalid enquiry id.' });
  }

  try {
    const result = db.prepare('DELETE FROM enquiries WHERE id = ?').run(id);
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Enquiry not found.' });
    }
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to delete enquiry.' });
  }
});

app.listen(PORT, () => {
  console.log(`API http://localhost:${PORT}`);
  if (!GOOGLE_CLIENT_ID) {
    console.warn('GOOGLE_CLIENT_ID is not set — review submissions are disabled until configured.');
  }
  if (!ADMIN_KEY) {
    console.warn('ADMIN_KEY is not set — enquiry dashboard is disabled until configured.');
  }
});
