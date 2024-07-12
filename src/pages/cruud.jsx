import Crud from "../components/crud";
import Productos from "../components/productos";
import { useState } from "react";
const Products = () => {
  const [productos, setProductos] = useState([]);
  return (
    <div>
      <Crud productos={productos} setProductos={setProductos} />
      <Productos productos={productos} setProductos={setProductos} />
    </div>
  );
};

export default Products;
