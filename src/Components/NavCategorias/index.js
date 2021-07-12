import { useState } from 'react';
import IconsNav from "./IconsNav";
import {Link} from 'react-router-dom';
import Cliente from '../../images/cliente.png';
import Trabajador from '../../images/trabajador.png';
import { Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Categorias(){
  //handle modals
  const [clienteShow, setClienteShow] = useState(false);
  const [eroShow, setEroShow] = useState(false);
  //
    return(
        <>
        <Modal id="cliente" show={clienteShow} onHide={() => setClienteShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ventajas de ser Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FontAwesomeIcon className="ventaja-icon" icon={faChartLine} /><span className="ventaja-title">Nuevos clientes</span><br/>
          <span className="ventaja-p">Adquirí clientes sin gastar en publicidad</span><br/>
          <FontAwesomeIcon className="ventaja-icon" icon={faCalendarAlt} /><span className="ventaja-title">Nuestro calendario</span><br/>
          <span className="ventaja-p">Agendá tus trabajos</span><br/>
          <FontAwesomeIcon className="ventaja-icon" icon={faShareAlt} /><span className="ventaja-title">Compatí tu perfil</span><br/>
          <span className="ventaja-p">Podrás mostrar tus trabajos realizados y tus preferencias</span><br/>
          <FontAwesomeIcon className="ventaja-icon" icon={faStar}/><span className="ventaja-title">Tener buen puntaje</span><br/>
          <span className="ventaja-p">Te posicionará entre los primeros de tu rubro</span><br/>
          </Modal.Body>
        
      </Modal>
      <Modal id="ero" show={eroShow} onHide={() => setEroShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ventajas de ser un Ero</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FontAwesomeIcon className="ventaja-icon" icon={faChartLine} /><span className="ventaja-title">Nuevos clientes</span><br/>
          <span className="ventaja-p">Adquirí clientes sin gastar en publicidad</span><br/>
          <FontAwesomeIcon className="ventaja-icon" icon={faCalendarAlt} /><span className="ventaja-title">Nuestro calendario</span><br/>
          <span className="ventaja-p">Agendá tus trabajos</span><br/>
          <FontAwesomeIcon className="ventaja-icon" icon={faShareAlt} /><span className="ventaja-title">Compatí tu perfil</span><br/>
          <span className="ventaja-p">Podrás mostrar tus trabajos realizados y tus preferencias</span><br/>
          <FontAwesomeIcon className="ventaja-icon" icon={faStar}/><span className="ventaja-title">Tener buen puntaje</span><br/>
          <span className="ventaja-p">Te posicionará entre los primeros de tu rubro</span><br/>
        </Modal.Body>
        
      </Modal>
        <section id="categorias d-flex ">
        <div className="categoriaContent d-flex flex-column flex-md-row my-4 my-md-0 ">
        <div className="text-md-right text-center mr-0 mr-md-3"><h5>Nuestras Categorías <br/>más solicitadas</h5></div>
        <div className="d-flex flex-row align-items-around "><IconsNav/></div>
       <div className="boton-nar d-flex d-inline mt-2 mt-md-0"><Link to='/categorias'>Ver más</Link></div>
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
          <div className="boton-azul mt-2 text-right mb-3"><Link onClick={() => setEroShow(true)}>Conoce más</Link></div>
        </div>
        
        <div className="erocliente col-12 col-md-5 px-5 py-3">
        <div className='d-flex flex-wrap align-items-md-baseline justify-content-md-start  justify-content-center '>
          <img src={Cliente}/>
          <h2 className="nar">¿Qué es un cliente?</h2>
        </div>
          <p>
            Es cualquier persona que necesite contratar un profesional, trabajador o cuentapropista, de manera rápida, fácil y gratuita. 
          </p>
          <div className="boton-azul mt-2 text-right mb-3"><Link onClick={() => setClienteShow(true)}>Conoce más</Link></div>
        </div>
        
      </div>
    </section>
    <div className="mb-3"></div>
    </>
    )
}
export default Categorias;