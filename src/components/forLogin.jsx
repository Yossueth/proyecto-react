import { useNavigate } from "react-router-dom";
import { getUser } from "../service/users/user-get";
import "../styles/log.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const ForLogin = () => {
  const navigate = useNavigate(); // Hook para la navegación entre rutas

  // Estados locales para almacenar el email y la contraseña del usuario
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    console.log("Email", email); // Muestra el email en la consola
    const data = await getUser(); // Llama a la función getUser para obtener los datos de usuarios

    // Verifica si se obtuvieron datos correctamente
    if (data) {
      const user = data.find((user) => user.email === email); // Busca al usuario por su email en los datos obtenidos
      if (user) {
        if (user.password === password) {
          // Comprueba si la contraseña ingresada coincide con la almacenada en los datos del usuario
          navigate("/"); // Navega a la ruta principal si la autenticación es exitosa
        } else {
          console.log("Contraseña incorrecta"); // Muestra un mensaje si la contraseña es incorrecta
        }
      } else {
        console.log("Usuario no encontrado"); // Muestra un mensaje si el usuario no existe en los datos obtenidos
      }
    } else {
      console.log("Error al obtener datos de usuarios"); // Muestra un mensaje si hay un error al obtener los datos de usuarios
    }
  };

  return (
    <div className="body">
      <div className="container">
        <form id="loggin" onSubmit={handleSubmit}>
          <h2>
            <b>Iniciar sesión</b>
          </h2>
          <div id="linea"></div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Ingresa tu email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado email cuando cambia el campo
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado password cuando cambia el campo
          />
          <input id="btnLogin" type="submit" value="Iniciar Sesión" />
          <p className="cambio">
            ¿No tienes una cuenta? <Link to="/signin">Regístrate</Link>
          </p>
        </form>
      </div>
      <style>{`body { background-color: #012c11; }`}</style>
    </div>
  );
};

export default ForLogin;
