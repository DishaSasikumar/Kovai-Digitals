import { motion } from 'framer-motion';
import { clientReviews } from '../../data/siteAssets.js';

function StarsDisplay({ rating }) {
  const full = Math.round(rating);

  return (
    <div
      className="rv-stars stars-row rv-stars--animated"
      aria-label={`${full} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <i
          key={i}
          className={i < full ? 'fas fa-star' : 'far fa-star'}
          style={{ animationDelay: `${i * 0.06}s` }}
        />
      ))}
    </div>
  );
}

function initials(name) {
  if (!name) return 'K';

  const parts = name.trim().split(/\s+/);

  return (
    (parts[0]?.[0] || '') +
    (parts[1]?.[0] || '')
  ).toUpperCase();
}

function ReviewCard({ review, index }) {
  const revealClass = index % 2 === 0 ? 'rv reveal-l' : 'rv reveal-r';

  return (
    <motion.article
      className={revealClass}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -5,
      }}
    >
      <StarsDisplay rating={review.rating} />

      <p className="rv-text">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="rv-author">
        {review.picture ? (
          <img
            className="rv-av"
            src={review.picture}
            alt={review.name}
            width="44"
            height="44"
          />
        ) : (
          <div className="rv-av">
            {initials(review.name)}
          </div>
        )}

        <div>
          <div className="rv-name">
            {review.name}
          </div>

          <div className="rv-role">
            {review.role || 'Valued Client'}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ReviewsSection() {
  const displayReviews = clientReviews.slice(0, 4);

  return (
    <section
      className="reviews sec-pad"
      id="reviews"
    >
      <motion.div
        className="reveal"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="sec-lbl">
          What Clients Say
        </div>

        <h2 className="sec-title">
          Client <em>Reviews</em>
        </h2>
      </motion.div>

      <p className="sec-sub reviews-intro">
        Real feedback from teams and families
        we've produced for.
      </p>

      <div className="reviews-grid">
        {displayReviews.map((review, index) => (
          <ReviewCard
            key={index}
            review={review}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}