import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Signin from "../pages/signin";
import Contacto from "../pages/contacto";
import Home from "../pages/home";
import Productos from "../components/productos";
const Rutas = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:busqueda" element={<Productos />} />
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
};

export default Rutas;
