const { NavLink } = require('react-router-dom');

const AuthNav = () => {
  return (
    <div>
      <NavLink className='nav-link' to="/register">Register </NavLink>
      <NavLink className='nav-link' to="/login">Log in</NavLink>
    </div>
  );
};

export default AuthNav;
