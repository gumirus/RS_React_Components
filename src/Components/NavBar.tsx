import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header>
        <Link to="/"></Link>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
