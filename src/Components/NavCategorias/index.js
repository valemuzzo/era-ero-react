import IconsNav from "./IconsNav";
import {Link} from 'react-router-dom';
import Cliente from '../../images/cliente.png';
import Trabajador from '../../images/trabajador.png'

function Categorias(){
    return(
        <>
        <section id="categorias d-flex ">
        <div className="categoriaContent d-flex flex-column flex-md-row my-4 my-md-0 ">
        <div className="text-md-right text-center mr-0 mr-md-3"><h5>Nuestras Categorías <br/>más solicitadas</h5></div>
        <div className="d-flex flex-row align-items-around "><IconsNav/></div>
       <div className="boton-nar d-flex d-inline mt-2 mt-md-0"><Link to='/'>Ver más</Link></div>
      </div>
      <div className="catPrincipales d-flex flex-wrap">
        <div className="erocliente col-12 col-md-5 px-5 py-3">
        <div className='d-flex flex-wrap align-items-md-baseline justify-content-md-start  justify-content-center '>
          <img className='mr-0 mr-md-3' src={Trabajador}/>
          <h2 className="turq">¿Qué es un ero?</h2>
        </div>
          <p>
            Es cualquier profesional, trabajador o cuenta propista que desea ofrecer sus servicios en la plataforma. 
          </p>
          <div className="boton-azul mt-2 text-right mb-3"><Link>Conoce más</Link></div>
        </div>
        
        <div className="erocliente col-12 col-md-5 px-5 py-3">
        <div className='d-flex flex-wrap align-items-md-baseline justify-content-md-start  justify-content-center '>
          <img src={Cliente}/>
          <h2 className="nar">¿Qué es un cliente?</h2>
        </div>
          <p>
            Es cualquier persona que necesite contratar un profesional, trabajador o cuentapropista, de manera rápida, fácil y gratuita. 
          </p>
          <div className="boton-azul mt-2 text-right mb-3"><Link>Conoce más</Link></div>
        </div>
        
      </div>
    </section>
    <div className="mb-3"></div>
    </>
    )
}
export default Categorias;