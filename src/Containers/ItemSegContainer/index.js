import { useState } from 'react';
import ItemSeg from '../../Components/ItemSeg';
import imgAccPers from '../../images/accidentes_personales.png';
import imgSegAuto from '../../images/seguro_auto.png';
import imgSegHogar from '../../images/seguro_hogar.png';
import imgBolsoProt from '../../images/bolso_protegido.png';
import imgSegMoto from '../../images/seguro_moto.png';
import imgSegVida from '../../images/seguro_vida.png';
import  {Link} from 'react-router-dom';
import { Form, Modal} from 'react-bootstrap';


function ItemSegContainer(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>
        
      <Modal show={show} onHide={handleClose} className="mx-3">
        <Modal.Header closeButton>
          <Modal.Title>¡Contactanos!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
        ¿Te gustaría que nuestros usuarios puedan emitir una póliza de tu compañia? Envianos tus datos así podemos contactarte
        <Form className="form-modal mx-5 mt-3">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <div className="d-flex justify-content-end"><span  className="boton-azul mt-2" type="submit"><Link className="px-5">
                    Enviar</Link></span></div>
        </Form>
        </Modal.Body>
        
      </Modal>
      <div id="bannerseguros" className="d-flex flex-column justify-content-end">
        <h1>Seguros</h1>
        <p> Obtené la mejor propuesta de seguros<br/> Broker de seguros trabaja con seguros Patrimoniales y Vida
        </p>
    </div>  
    <div className="encabezado-color d-flex flex-column justify-content-end">
      <h2>¿Sos una compañia y querés promocionar tus productos?</h2>
      <h4> Comunicate con nosotros y enterate cómo llegar a más clientes
      </h4>
      <div className="boton-nar mt-2 "><Link onClick={handleShow}>Contactanos</Link></div>
  </div> 
    <section id="categorias d-flex">
      <div className="catPrincipales d-flex flex-wrap mb-5">
      <ItemSeg seguroName={"Accidentes Personales"} seguroImg={imgAccPers} seguroTexto={"Próximamente contaremos con este servicio"}/>
      <ItemSeg seguroName={"Seguro de Auto"} seguroImg={imgSegAuto} seguroTexto={"Próximamente"}/>
      <ItemSeg seguroName={"Seguro de Hogar"} seguroImg={imgSegHogar} seguroTexto={"Próximamente"}/>
      <ItemSeg seguroName={"Bolso Protegido"} seguroImg={imgBolsoProt} seguroTexto={"Próximamente"}/>
      <ItemSeg seguroName={"Seguro de Moto"} seguroImg={imgSegMoto} seguroTexto={"Próximamente"}/>
      <ItemSeg seguroName={"Seguro de Vida"} seguroImg={imgSegVida} seguroTexto={"Próximamente"}/>
      </div>
      </section>
        </>
    )
}

export default ItemSegContainer;