import { useState } from "react";
import { Postprodu } from "../service/products/pro-post";
import Crud from "./crud";

const Forhomee = ({ productos, setProductos }) => {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  async function meterDatos() {
    const nuevoProducto = {
      nombre: nombre,
      imagen: imagen,
      descripcion: descripcion,
      precio: precio,
    };
    await Postprodu(nuevoProducto);
    if ((nombre && imagen && descripcion && precio) === "") {
      alert("Hay espacios vacios");
    } else {
      setProductos([...productos, nuevoProducto]);
      setNombre("");
      setImagen("");
      setDescripcion("");
      setPrecio("");
    }
  }
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
          <a href="#sor">Sneakers </a>
          <a href="#pro">Hoodies</a>
          <a href="#hab">T-Shirts</a>
          <a href="#con">Sunglasses</a>
          <a href="#con">Collectibles</a>
        </nav>
      </header>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="nombre"
      />
      <input
        type="text"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="descripcion"
      />
      <input
        type="text"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        placeholder="imagen"
      />
      <input
        type="text"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        placeholder="precio"
      />
      <button id="btnEnviar" onClick={meterDatos}>
        Enviar
      </button>
      <Crud />
      <style>{'body { background: #151515; }'}</style>
    </div>
  );
};

export default Forhomee;
