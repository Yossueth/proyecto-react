import { useEffect, useState } from "react";
import { productsGET } from "../service/products/pro-get";
import { deleteprodu } from "../service/products/pro-delete";
import "../styles/productos.css";
import Crud from "./crud";
import { useParams } from "react-router-dom";
const Productos = () => {
  const [productos, setProductos] = useState([]);
  const { busqueda } = useParams();

  const traerDatos = async () => {
    let data = await productsGET();
    console.log(busqueda);
    if (busqueda) {
      data = data.filter((producto) => producto.nombre.match(busqueda));
    }
    console.log(data);

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
      <Crud productos={productos} setProductos={setProductos} />
      <div id="papaDeProductos">
        {productos.map((producto, index) => (
          <div key={index} id="producto">
            <div>
              <img id="imgProduct" src={producto.imagen} alt="" />
            </div>
            <p id="nombreProuct">{producto.nombre}</p>

            <div id="precioProduct">$ {producto.precio}</div>
            <button
              onClick={() => handleDelete(producto.id)}
              className="btnprodu"
            >
              borrar
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Productos;
