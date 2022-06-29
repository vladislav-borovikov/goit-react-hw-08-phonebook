import { NavLink } from 'react-router-dom';

export default function AuthMenu() {

  return (
    <>
    <NavLink to="/register"> Register </NavLink>
    <NavLink to="/login"> login </NavLink>
      
    </>
  );
}
