import { Link, Outlet } from 'react-router-dom';
import '../style.css';

function NavBar() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About Us</Link>
      </header>
      <Outlet />
    </>
  );
}

export default NavBar;