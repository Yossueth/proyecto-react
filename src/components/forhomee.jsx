const Forhomee = () => {
  return (
    <div className="nav">
      <header className="header">
        <h1 className="logo">StockX</h1>

        <nav className="navbar">
          <div id="search">
            <input type="text" placeholder="search" id="buscador" />
            <input id="btn" type="submit" value="Search" />
          </div>
          <a href="#hab">Sobre Nosotros</a>
          <a href="/contacto">Contacto</a>
          <a href="/login">Login</a>
        </nav>
      </header>
      <hr />
      <header className="header2">
        <nav className="navbar2">
          <a href="/sneaker">Sneakers </a>
          <a href="#pro">Hoodies</a>
          <a href="#hab">T-Shirts</a>
          <a href="#con">Sunglasses</a>
          <a href="#con">Collectibles</a>
        </nav>
      </header>
    </div>
  );
};

export default Forhomee;
