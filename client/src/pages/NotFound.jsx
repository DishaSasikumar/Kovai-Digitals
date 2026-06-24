import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>That page does not exist.</p>
      <Link to="/" className="btn-teal">
        Return home
      </Link>
    </div>
  );
}
