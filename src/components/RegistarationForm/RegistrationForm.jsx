

const RegistrationForm = ({url}) => {
    return (
    <form >
      <label> Name: </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // value={name}
        // onChange={handlChang}
      />
      <label> e-mail: </label>
      <input
        type="e-mail"
        name="e-mail"
        title="e-mail"
        required
        // value={number}
        // onChange={handlChang}
        />
        <label> password </label>
      <input
        type="text"
        name="password"
        title="password"
        required
        // value={number}
        // onChange={handlChang}
      />
      <button type="submit"> Add contact </button>
    </form>
    )
}

export default RegistrationForm