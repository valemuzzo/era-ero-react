import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
function MainNav(){
    return(
    <div className="menuSuperior d-flex flex-column flex-md-row text-center text-ms-left px-0 px-ms-3">
        <div className="d-flex flex-column flex-md-row col-12 col-md-6">
        <div className="textoRedes col-12 col-md-3 text-center text-md-right px-0">
          <p>Seguinos en nuestras redes</p>
        </div>
        <div className="iconosRedes d-flex justify-content-center justify-content-md-start col-12 col-sm-4  mt-sm-3">
        <Link to="/"><FontAwesomeIcon icon={faFacebookF} /></Link>
        <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
        <Link to="/"><FontAwesomeIcon icon={faYoutube} /></Link>
        </div>
      </div>
      <div className="navegacion d-flex flex-column flex-md-row justify-content-end col-12 col-md-6 my-2">
        <ul className="nav py-2">
          <div className="d-flex mx-auto mb-3 mb-md-0 mr-0 mr-md-3">
            <li className="boton-azul">
            <Link to='/ComoFunciona'>¿Cómo funciona?</Link>
            </li>
          </div>
          <div className="d-flex flex-row mx-auto ">
            <li className="nav-item">
            <Link to='/Seguros' className="nav-link">Seguros</Link>
            </li>
            <li className="nav-item">
            <Link to='/Tutoriales' className="nav-link">Tutoriales</Link>
            </li>
            <li className="nav-item">
            <Link to='/Categorias' className="nav-link">Categorías</Link>
            </li>
          </div>
        </ul>
    </div>
    </div>
    )
}
export default MainNav;