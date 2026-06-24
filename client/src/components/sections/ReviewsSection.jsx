import { useCallback, useEffect, useMemo, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';
import { clientReviews } from '../../data/siteAssets.js';

function StarsDisplay({ rating }) {
  const full = Math.round(rating);
  return (
    <div className="rv-stars stars-row rv-stars--animated" aria-label={`${full} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <i key={i} className={i < full ? 'fas fa-star' : 'far fa-star'} style={{ animationDelay: `${i * 0.06}s` }} />
      ))}
    </div>
  );
}

function initials(name) {
  if (!name) return 'K';
  const p = name.trim().split(/\s+/);
  return (p[0][0] + (p[1]?.[0] || '')).toUpperCase();
}

function ReviewCard({ r, index }) {
  const revealClass = index === 0 ? 'rv reveal-l' : 'rv reveal-r';
  return (
    <motion.article
      className={revealClass}
      initial={{ opacity: 0, y: 36, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, borderColor: 'rgba(0,201,167,0.35)' }}
    >
      <StarsDisplay rating={r.rating} />
      <p className="rv-text">&ldquo;{r.text}&rdquo;</p>
      <div className="rv-author">
        {r.picture ? (
          <img className="rv-av" src={r.picture} alt="" width={44} height={44} />
        ) : (
          <div className="rv-av">{initials(r.name)}</div>
        )}
        <div>
          <div className="rv-name">{r.name || 'Guest'}</div>
          <div className="rv-role">{r.role || r.email || 'Valued Client'}</div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ReviewsSection() {
  const [apiReviews, setApiReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [msg, setMsg] = useState(null);
  const [busy, setBusy] = useState(false);
  const [googleReady, setGoogleReady] = useState(false);

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      setApiReviews(data.reviews || []);
    } catch {
      setApiReviews([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((d) => setGoogleReady(Boolean(d.googleConfigured)))
      .catch(() => setGoogleReady(false));
  }, []);

  const displayReviews = useMemo(() => {
    const fromUsers = apiReviews.filter((r) => r.google_sub && !String(r.google_sub).startsWith('seed'));
    return [...fromUsers, ...clientReviews].slice(0, 4);
  }, [apiReviews]);

  const onGoogleSuccess = async (cred) => {
    setMsg(null);
    setBusy(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential: cred.credential, rating, text }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not post review');
      setApiReviews((prev) => [data.review, ...prev]);
      setText('');
      setMsg({ type: 'ok', text: 'Thank you — your review is live.' });
    } catch (e) {
      setMsg({ type: 'err', text: e.message });
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="reviews sec-pad" id="reviews">
      <motion.div
        className="reveal"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="sec-lbl">What Clients Say</div>
        <h2 className="sec-title">
          Client <em>Reviews</em>
        </h2>
      </motion.div>
      <p className="sec-sub reviews-intro">Real feedback from teams and families we&apos;ve produced for.</p>

      <div className="reviews-split">
        <div className="reviews-grid-wrap">
          {loading && <p className="sec-sub">Loading reviews…</p>}
          {!loading && (
            <div className="reviews-grid">
              {displayReviews.map((r, i) => (
                <ReviewCard key={r.id || `review-${i}`} r={r} index={i} />
              ))}
            </div>
          )}
        </div>

        <motion.aside
          className="review-compose reveal-r"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h3>Rate your experience</h3>
          <p>Sign in with Google, pick stars, and share a short note.</p>

          <div className="star-picker" role="group" aria-label="Star rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} type="button" className={n <= rating ? 'active' : ''} onClick={() => setRating(n)} aria-label={`${n} stars`}>
                <i className="fas fa-star" />
              </button>
            ))}
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What stood out about working with Kovai Digital?"
            maxLength={800}
          />

          {!clientId && (
            <p className="review-msg err">
              Add <code>VITE_GOOGLE_CLIENT_ID</code> in <code>client/.env</code>.
            </p>
          )}
          {clientId && !googleReady && (
            <p className="review-msg err">
              Set <code>GOOGLE_CLIENT_ID</code> in <code>server/.env</code> and restart the API.
            </p>
          )}

          {clientId && googleReady && (
            <div className="review-google-slot">
              <GoogleLogin
                onSuccess={onGoogleSuccess}
                onError={() => setMsg({ type: 'err', text: 'Google sign-in was interrupted.' })}
                useOneTap={false}
                theme="filled_black"
                shape="pill"
                text="continue_with"
                locale="en"
                disabled={busy}
              />
            </div>
          )}

          {busy && <p className="review-msg">Posting…</p>}
          {msg && <p className={`review-msg ${msg.type}`}>{msg.text}</p>}
        </motion.aside>
      </div>
    </section>
  );
}
