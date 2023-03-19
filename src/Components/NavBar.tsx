import { Link, Outlet } from 'react-router-dom';
import '../style.css';

function NavBar() {
  return (
    <header className="header">
      <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/formpage">Form Page</Link>
      </div>
      <Outlet />
    </header>
  );
}

export default NavBar;
