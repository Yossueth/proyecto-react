import "../styles/footerr.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export function comFooter() {
  return (
    <>
      <div className="foter">
        <div className="footer">
          <p>about us</p>
          <p>Privacy Policy</p>
          <p>Licensing</p>
          <Link id="liink" to={"/contacto"}>
            contacto
          </Link>
        </div>
        <div className="icons">
          <Link id="liink" to={"https://www.facebook.com/stockxdotcom"}>
            <FaFacebookF />
          </Link>
          <Link id="liink" to={"https://x.com/stockx"}>
            <FaXTwitter />
          </Link>
          <Link id="liink" to={"https://www.instagram.com/stockx/"}>
            <FaInstagram />
          </Link>
          <Link id="liink" to={"https://www.youtube.com/stockx"}>
            <FaYoutube />
          </Link>
        </div>
        <div className="derechos">
          <p>© 2024 StockX™</p>
        </div>
      </div>
    </>
  );
}

export default comFooter;
