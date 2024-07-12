import { useState } from "react";
import "../styles/sig.css";
import { postUser } from "../service/users/user-post";

const Signin = () => {
  const [user, setUser] = useState();
  const [password, setPasword] = useState();
  const [email, setEmail] = useState();

  const handleSumit = (event) => {
    event.preventDefault();
    console.log("Name", user);
    console.log("Email", password);
  };
  function signin(user, password, email) {
    let userData = {
      user: user,
      password: password,
      email: email,
    };
    postUser(userData);
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
              onChange={(e) => setUser(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              required
              onChange={(e) => setPasword(e.target.value)}
            />
            <input
              onClick={() => signin(user, password, email)}
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
