import { useEffect, useState } from "react";
import { productsGET } from "../service/products/pro-get";
import { deleteprodu } from "../service/products/pro-delete";
import "../styles/productos.css";
import Crud from "./crud";
import { useParams } from "react-router-dom";
import { PUT } from "../service/products/pro-put";

const Productos = () => {
  const [nombreEdit, setnombreEdit] = useState("");
  const [precioEdit, setprecioEdit] = useState("");
  const [productoEditado, setproductoEditado] = useState("");
  const [modal, setmodal] = useState(false);
  const [productos, setProductos] = useState([]);
const [imagen, setimagen] = useState("")
  const { busqueda } = useParams();

  const traerDatos = async () => {
    let data = await productsGET();
    if (busqueda) {
      data = data.filter((producto) => producto.nombre.match(busqueda));
    }
    setProductos(data);
  };

  const editar = async (producto) => {
    setproductoEditado(producto.id);
    setnombreEdit(producto.nombre);
    setprecioEdit(producto.precio);
    setimagen(producto.imagen)
    console.log(productoEditado);

    setmodal(true);
  };

  const editarProduct = async () => {
    await PUT(productoEditado, nombreEdit, precioEdit, imagen);
    await traerDatos()
  };

  useEffect(() => {
    traerDatos();
  }, []);

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
              Borrar
            </button>
            <>
              <button onClick={() => editar(producto)} id="btnEditar">
                Editar
              </button>
              {modal ? (
                <div className="containerModal">
                  <input
                    value={nombreEdit}
                    onChange={(e) => setnombreEdit(e.target.value)}
                    type="text"
                  />
                  <input
                    value={precioEdit}
                    onChange={(e) => setprecioEdit(e.target.value)}
                    type="text"
                  />
                  <button onClick={editarProduct}>confirmar</button>
                </div>
              ) : (
                console.log("cerrar")
              )}
            </>
          </div>
        ))}
      </div>
    </>
  );
};

export default Productos;
