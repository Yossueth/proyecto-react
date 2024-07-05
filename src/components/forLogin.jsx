import { useState } from "react";
import "../styles/log.css";
import { useNavigate } from "react-router-dom";
import { getUser } from "../service/users/user-get";

const ForLogin = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Email", password);
    const data = await getUser();

    if (data) {
      const user = data.find((user) => user.email === email);
      if (user) {
        if (user.password === password) {
          navigate("/home");
        }
      }
    }
  };
  return (
    <div className="body">
      <div className="container">
        <form id="loggin" onSubmit={handleSubmit}>
          <h2>
            <b>Inicio de sesion</b>
          </h2>
          <div id="linea"></div>
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <input id="btnRegister" type="submit" value="Iniciar Sesion" />
          <p>
            No tienes una cuenta? <a href="/signin">Registro</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForLogin;
