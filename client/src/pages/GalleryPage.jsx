import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getGallery } from '../data/siteContent.js';

export default function GalleryPage() {
  const { slug } = useParams();
  const gallery = getGallery(slug);

  if (!gallery) {
    return (
      <div className="not-found">
        <h1>Gallery not found</h1>
        <p>This category does not exist yet.</p>
        <Link to="/" className="btn-teal">
          Back home
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="gallery-page-hero">
        <Link to="/#services" className="gallery-back">
          <i className="fas fa-arrow-left" /> Our Expertise
        </Link>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          {gallery.title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}>
          {gallery.intro}
        </motion.p>
      </div>

      <div className="gallery-media-grid">
        {gallery.items.map((item, i) => (
          <motion.figure
            key={`${item.src}-${i}`}
            className="gallery-item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.01 }}
          >
            <span className="media-tag">{item.type === 'video' ? 'Video' : '4K Photo'}</span>
            {item.type === 'video' ? (
              <video controls playsInline poster={item.poster} preload="metadata">
                <source
                  src={item.src}
                  type={item.src.endsWith('.webm') ? 'video/webm' : 'video/mp4'}
                />
              </video>
            ) : (
              <img src={item.src} alt={item.caption || ''} loading="lazy" decoding="async" />
            )}
            <figcaption>{item.caption}</figcaption>
          </motion.figure>
        ))}
      </div>
    </>
  );
}
