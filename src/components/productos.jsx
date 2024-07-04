import { useEffect } from "react";
import { productsGET } from "../service/products/pro-get";
import { deleteprodu } from "../service/products/pro-delete";
import "../styles/productos.css";
const Productos = ({ productos, setProductos }) => {
  const traerDatos = async () => {
    const data = await productsGET();
    setProductos(data); // Actualizar el estado con los datos obtenidos
  };
  useEffect(() => {
    traerDatos();
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez
  const handleDelete = async (id) => {
    await deleteprodu(id);
    await traerDatos();
  };
  return (
    <>
      <div id="papaDeProductos">
        {productos.map((producto, index) => (
          <div key={index} id="producto">
            <div><img id="imgProduct" src={producto.imagen} alt="" /></div>
            <p id="nombreProuct">{producto.nombre}</p>

            <div id="precioProduct">$ {producto.precio}</div>
            <button onClick={() => handleDelete(producto.id)}>borrar</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Productos;
