import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <nav>
      <span>Movie characters</span>
      <ul className="nav-list">
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/catalog'}>Catalog</NavLink>
        </li>
        <li>
          <NavLink to={'/create'}>Create</NavLink>
        </li>
        <li>
          <NavLink to={'/register'}>Register</NavLink>
        </li>
        <li>
          <NavLink to={'/login'}>Login</NavLink>
        </li>
        <li>
          <NavLink to={'/logout'}>Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
};
