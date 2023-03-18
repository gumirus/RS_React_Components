import { Link, Outlet } from 'react-router-dom';
import '../style.css';

function NavBar() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/formpage">Form Page</Link>
      </header>
      <Outlet />
    </>
  );
}

export default NavBar;
