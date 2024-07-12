import { useEffect, useState } from "react";
import { productsGET } from "../service/products/pro-get";
import "../styles/productos.css"
const Products = () => {
  const [products, setProducts] = useState([]);

  const renderProducts = async () => {
    const dataProducts = await productsGET();
    setProducts(dataProducts);
  };

  useEffect(() => {
    renderProducts();
  }, []);

  return (
    <>
      <div id="papaDeProductos">
        {products.map((producto, index) => (
          <div key={index} id="producto">
            <div>
              <img id="imgProduct" src={producto.imagen} alt="" />
            </div>
            <p id="nombreProuct">{producto.nombre}</p>
            <div id="precioProduct">$ {producto.precio}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
