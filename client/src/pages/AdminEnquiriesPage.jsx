import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'kovai_admin_key';

function formatDate(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  } catch {
    return iso;
  }
}

export default function AdminEnquiriesPage() {
  const [adminKey, setAdminKey] = useState(() => sessionStorage.getItem(STORAGE_KEY) || '');
  const [keyInput, setKeyInput] = useState('');
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const load = useCallback(async (key) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/enquiries', {
        headers: { 'X-Admin-Key': key },
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Failed to load');
      setEnquiries(data.enquiries || []);
    } catch (err) {
      setError(err.message);
      setEnquiries([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (adminKey) load(adminKey);
  }, [adminKey, load]);

  function handleLogin(e) {
    e.preventDefault();
    const key = keyInput.trim();
    if (!key) return;
    sessionStorage.setItem(STORAGE_KEY, key);
    setAdminKey(key);
  }

  function handleLogout() {
    sessionStorage.removeItem(STORAGE_KEY);
    setAdminKey('');
    setKeyInput('');
    setEnquiries([]);
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this enquiry?')) return;
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: 'DELETE',
        headers: { 'X-Admin-Key': adminKey },
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Delete failed');
      }
      setEnquiries((list) => list.filter((e) => e.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  if (!adminKey) {
    return (
      <div className="admin-page">
        <div className="admin-login">
          <Link to="/" className="admin-back">
            <i className="fas fa-arrow-left" /> Back to site
          </Link>
          <h1>Enquiry dashboard</h1>
          <p>Enter your admin key to view enquiries saved from the contact form.</p>
          <form onSubmit={handleLogin}>
            <label htmlFor="admin-key">Admin key</label>
            <input
              id="admin-key"
              type="password"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              placeholder="From server/.env ADMIN_KEY"
              autoComplete="current-password"
            />
            <button type="submit" className="btn-teal">
              Open dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-toolbar">
        <div>
          <Link to="/" className="admin-back">
            <i className="fas fa-arrow-left" /> Site
          </Link>
          <h1>Enquiry dashboard</h1>
          <p>{enquiries.length} enquiry{enquiries.length === 1 ? '' : 'ies'}</p>
        </div>
        <div className="admin-toolbar-actions">
          <button type="button" className="btn-outline" onClick={() => load(adminKey)} disabled={loading}>
            Refresh
          </button>
          <button type="button" className="btn-outline admin-logout" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>

      {error ? <p className="admin-error">{error}</p> : null}
      {loading ? <p className="admin-loading">Loading…</p> : null}

      {!loading && enquiries.length === 0 ? (
        <p className="admin-empty">No enquiries yet. They appear here when visitors submit the contact form.</p>
      ) : null}

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Service</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {enquiries.map((row) => (
              <tr key={row.id}>
                <td>{formatDate(row.createdAt)}</td>
                <td>{row.name}</td>
                <td>
                  <a href={`tel:${row.phone}`}>{row.phone}</a>
                </td>
                <td>
                  <a href={`mailto:${row.email}`}>{row.email}</a>
                </td>
                <td>{row.service || '—'}</td>
                <td className="admin-msg">{row.message}</td>
                <td>
                  <button type="button" className="admin-del" onClick={() => handleDelete(row.id)} title="Delete">
                    <i className="fas fa-trash" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
