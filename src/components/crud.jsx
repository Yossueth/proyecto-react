import { useState } from "react";
import { Postprodu } from "../service/products/pro-post";

const Crud = ({ productos, setProductos }) => {
  const [nombre, setNombre] = useState();
  const [imagen, setImagen] = useState();
  const [descripcion, setDescripcion] = useState();
  const [precio, setPrecio] = useState();
 
  function meterDatos() {
    let nuevoProducto = {
      nombre: nombre,
      imagen: imagen,
      descripcion: descripcion,
      precio: precio,
    };

    Postprodu(nuevoProducto);
    setProductos([...productos, nuevoProducto]);
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNombre(e.target.value)}
        placeholder="nombre"
      />
      <input
        type="text"
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="descripcion"
      />
      <input
        type="text"
        onChange={(e) => setImagen(e.target.value)}
        placeholder="imagen"
      />
      <input
        type="text"
        onChange={(e) => setPrecio(e.target.value)}
        placeholder="precio"
      />

      <button id="btnEnviar" onClick={meterDatos}>
        Enviar
      </button>

      <style>{"body { background: #151515; }"}</style>
    </div>
  );
};

export default Crud;
