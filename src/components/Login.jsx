function login(props) {
    const user = {
        username: "Jesús",
        email: "jesusdaniel.rodriguezgomez@iesvalleinclan.es"
    }

    const handleClick = () => {
        props.handleLogin(user);
    }

  return (
    <section>
        <h2>Login section</h2>
        <button onClick={handleClick}>Login</button>
    </section>
 )
}

export default login