import { useState } from "react";
import "../styles/sig.css";
import { postData } from "../service/service";

const forSignin = () => {
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
    postData(userData);
  }
  return (
    <div className="container">
      <form onSubmit={handleSumit} id="loggin">
        <h2>
          <b>Registro</b>
        </h2>
        <div id="linea"></div>
        <label>User</label>
        <input
          type="text"
          placeholder="Enter your user"
          id="user"
          required
          autoFocus
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          required
          value={password}
          onChange={(e) => setPasword(e.target.value)}
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

export default forSignin;
