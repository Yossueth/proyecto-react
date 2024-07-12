import { useState } from "react";
import "../styles/sig.css";
import { postUser } from "../service/users/user-post";

const Signin = () => {
  // Estados locales para almacenar el nombre de usuario, contraseña y email
  const [user, setUser] = useState();
  const [password, setPasword] = useState();
  const [email, setEmail] = useState();


  const handleSumit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    console.log("Name", user); // Muestra el nombre de usuario en la consola
    console.log("Email", password); // Muestra el email en la consola
  };
  //Función para realizar el registro de usuario.
  function signin(user, password, email) {
    let userData = {
      user: user,
      password: password,
      email: email,
    };
    postUser(userData); // Llama a la función postUser para enviar los datos del usuario
  }
  return (
    <>
      <div className="body2">
        <div className="container2">
          <form id="loggin" onSubmit={handleSumit}>
            <h2>
              <b> Registrarse</b>
            </h2>
            <div id="linea"></div>

            <label>User</label>
            <input
              type="text"
              placeholder="Enter your user"
              id="user"
              required
              onChange={(e) => setUser(e.target.value)} // Actualiza el estado user cuando cambia el campo
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado email cuando cambia el campo
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              required
              onChange={(e) => setPasword(e.target.value)} // Actualiza el estado password cuando cambia el campo
            />
            <input
              onClick={() => signin(user, password, email)} // Llama a la función signin al hacer clic en el botón
              id="btnRegister"
              type="submit"
              value="Iniciar Sesion"
            />
            <p className="cambio">
              No tienes una cuenta? <a href="/login">Registro</a>
            </p>
          </form>
        </div>
      </div>

      <style>{"body { background-color: #012c11; }"}</style>
    </>
  );
};

export default Signin;

<p>
  Ya tienes una cuenta? <a href="/login">Login</a>
</p>;
