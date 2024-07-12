import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [buscador, setBuscador] = useState("");

  const navigate = useNavigate();
  function buscar() {
    navigate("/productos/" + buscador.toLowerCase());
  }
  return (
    <div className="nav">
      <header className="header">
        <h1 className="logo">StockX</h1>
        <nav className="navbar">
          <div id="search">
            <input
              type="text"
              placeholder="search"
              id="buscador"
              onChange={(e) => setBuscador(e.target.value)}
            />
            <input id="btn" type="submit" value="Search" onClick={buscar} />
          </div>
          <div className="registro">
            <a href="/login">Login</a>
            <a href="/Signin">Signin</a>
          </div>
        </nav>
      </header>
      <hr />
      <header className="header2">
        <nav className="navbar2">
          <a href="/sneaker">Sneakers </a>
          <a href="#">Hoodies</a>
          <a href="#">T-Shirts</a>
          <a href="#">Sunglasses</a>
          <a href="#">Collectibles</a>
        </nav>
      </header>
      <style>{"body { background-color: #151515; }"}</style>
    </div>
  );
};

export default Navbar;
