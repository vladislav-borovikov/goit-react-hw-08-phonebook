// import { NavLink, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getIsLogedIn } from '../../redax/auth/auth-selector';
import { useSelector } from 'react-redux';
import UserMenu from 'components/appBar/UserMenu';
import AuthMenu from 'components/appBar/AuthMenu';

export default function AppBar() {
  const isLogedIn = useSelector(getIsLogedIn);

  return (
    <header>
      <NavLink to="/"> Home </NavLink>
      {isLogedIn ? <UserMenu /> : <AuthMenu/>}
    </header>
  );
}
