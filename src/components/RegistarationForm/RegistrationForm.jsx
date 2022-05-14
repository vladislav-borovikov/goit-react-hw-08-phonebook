import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redax/auth/auth-operations';

const RegistrationForm = ({ url }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  

    return (
    <form  onSubmit={handleSubmit}>
      <label> Name: </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
          value={name}
          onChange={handleChange}
      />
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
    )
}

export default RegistrationForm