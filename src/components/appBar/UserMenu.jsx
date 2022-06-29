import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from 'redax/auth/auth-operation';
import { getUserName } from 'redax/auth/auth-selector';
import Button from '@mui/material/Button';



export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  return (
    <>
          <NavLink to="/contacts"> contacts </NavLink>
          <span> Добро пожаловать, { name}</span>
      <Button variant="contained" color="success" size="small" onClick={() => dispatch(logout())}>
        logout
      </Button> 
    </>
  );
}
