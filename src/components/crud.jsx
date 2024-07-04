// import { Postprodu } from "../service/products/pro-post";
import { productsGET } from "../service/products/pro-get";
import { useState } from "react";

const Crud = () => {
  const [productos, setProductos] = useState([]);
//   const [nombre, setNombre] = useState("");
//   const [imagen, setImagen] = useState("");
//   const [descripcion, setDescripcion] = useState("");

  const traerDatos = async () => {
    const data = await productsGET();
    setTimeout(() => {
        setProductos(data);
        console.log(productos);
    }, 10);
  };

  return (
    <>
      <button onClick={traerDatos}>kkkk</button>
    </>
  );
};

export default Crud;
