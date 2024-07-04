import Forhomee from "../components/forhomee";
import "../styles/ho.css";
import Productos from "../components/productos";
import {} from "../components/prueba";
import { useState } from "react";


const Home = () => {
  const [productos, setProductos] = useState([]);
  
  return (
    <>
      <Forhomee productos={productos} setProductos={setProductos} />
      <Productos productos={productos} setProductos={setProductos} />

    </>
  );
};

export default Home;
