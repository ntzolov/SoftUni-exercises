import { NavLink } from 'react-router-dom';

export const Header = () => {
  function toggleDropdown() {
    const element = document.getElementById('myTopnav');

    if (element.className === 'topnav') {
      element.className += ' responsive';
    } else {
      element.className = 'topnav';
    }
  }

  function onResponsiveMenuClick() {
    const element = document.getElementById('myTopnav');

    if (element.className !== 'topnav') {
      element.className = 'topnav';
    }
  }

  return (
    <nav>
      <div className="topnav" id="myTopnav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onResponsiveMenuClick}>
          Home
        </NavLink>

        <NavLink to="/catalog" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onResponsiveMenuClick}>
          Catalog
        </NavLink>

        <NavLink to="/create" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onResponsiveMenuClick}>
          Create
        </NavLink>

        <NavLink to="/my-list" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onResponsiveMenuClick}>
          My list
        </NavLink>

        <NavLink to="/auth" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onResponsiveMenuClick}>
          Login / Register
        </NavLink>

        <NavLink to="/logout" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onResponsiveMenuClick}>
          Logout
        </NavLink>

        <NavLink style={{ fontSize: '15px' }} className="icon" onClick={toggleDropdown}>
          &#9776;
        </NavLink>

        {/* Dropdown if i need... */}
        {/* <div className="dropdown">
          <button className="dropbtn">
            Dropdown
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <NavLink to={'/test'}>test</NavLink>
          </div>
        </div> */}
      </div>
    </nav>
  );
};
