import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redax/auth/auth-operations'
import { NavLink } from "react-router-dom";



const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

    const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

    return (
      <>
            <form onSubmit={handleSubmit}>
      <label> e-mail: </label>
      <input
        type="email"
        name="email"
        title="e-mail"
        required
        value={email}
        onChange={handleChange}
        />
        <label> password </label>
      <input
        type="password"
        name="password"
        title="password"
        required
        value={password}
        onChange={handleChange}
      />
      <button type="submit"> Add contact </button>
      </form>
        <NavLink exact to="/register" > Register to login </NavLink>
      </>
    )
}

export default LoginForm