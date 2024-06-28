import React from "react";
import "../styles/cont.css"
const forContacto = () => {
  return (
    <section id="contacto" className="contacto">
      <div className="contenido-seccion">
        <h2 id="con">CONTACTO</h2>
        <div className="fila">
          <div className="col">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Dirección de correo" />
            <input type="text" placeholder="Tema" />
            <textarea
              name=""
              id=""
              cols="1"
              rows="4"
              placeholder="Mensaje"
           ></textarea>
            <button>
              Enviar Mensaje<i className="fa-solid fa-paper-plane"></i>
              <span className="overlay"></span>
            </button>
          </div>
          <div className="col">
            <div className="info">
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  📍Costa Rica 
                </li>
                <li>
                  <i className="fa-solid fa-mobile-screen"></i>
                  📞 +506 2384 - 5978
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  📧 StreeX @gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default forContacto;
