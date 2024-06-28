import React, { useState } from "react";
import "../styles/log.css";
const ForLogin = () => {
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="container">
      <form id="loggin">
        <h2>
          <b>Inicio de sesion</b>
        </h2>
        <div id="linea"></div>
        <label>User</label>
        <input
          type="text"
          placeholder="Enter your user"
          id="user"
          required
          autoFocus
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          required
        />
        <input
          onClick={() => signin(user, password, email)}
          id="btnRegister"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default ForLogin;
