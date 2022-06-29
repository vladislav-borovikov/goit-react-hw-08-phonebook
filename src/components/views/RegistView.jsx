import { useState } from "react";
import { useDispatch } from "react-redux";
import * as authOperation from '../../redax/auth/auth-operation';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function RegistView() {
const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function hanleChange({ target: { name, value } }) {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(authOperation.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
      <div>
      <h1>Registration page</h1>
      <form onSubmit={handleSubmit}>
        
          <TextField id="outlined-basic" label="Name" variant="outlined" type="text" name="name" value={name} onChange={hanleChange}/>    
          <TextField id="outlined-basic" label="Email" variant="outlined"
            type="text"
            name="email"
            value={email}
            onChange={hanleChange}
          />
          <TextField id="outlined-basic" label="Password" variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={hanleChange}
          />

        <Button type="submit" variant="contained" size="large">Register</Button>
      </form>
    </div>
    
  );
}