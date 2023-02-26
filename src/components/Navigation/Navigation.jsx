import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className='nav-link' to="/">Home</NavLink>
      {isLoggedIn && <NavLink className='nav-link' to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
