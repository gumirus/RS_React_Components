import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <button type="button">
        <Link to="/">Go Home</Link>
      </button>
    </div>
  );
}

export default NotFound;
