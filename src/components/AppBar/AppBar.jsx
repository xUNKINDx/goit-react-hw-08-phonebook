import AuthNav from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="header">
      <Navigation/>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
