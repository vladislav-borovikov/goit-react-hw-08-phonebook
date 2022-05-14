

const LoginForm = () => {
    return (
    <form >
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

export default LoginForm