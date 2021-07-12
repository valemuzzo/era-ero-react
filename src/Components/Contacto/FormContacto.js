import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {getFirestore} from '../../Firebase';

import { Button, Form, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function FormContacto(){
    
    const db = getFirestore(); 
    const [suscriptor, setSuscriptor]= useState('');
    const [registroId, setRegistroId] = useState();
    const { register, handleSubmit, errors } = useForm();

    const handleChange=(event)=>{
    setSuscriptor({...suscriptor, [event.target.name]:event.target.value})
    }

    const suscripcion=()=>{
    
    console.log({suscriptor: suscriptor});
    
    const nuevoRegistro = {
        persona : suscriptor,
        }
        
        db.collection('listadoSuscriptores').add(nuevoRegistro).then(docRef => {
            console.log("Registro ID: ", docRef.id);
            setRegistroId(docRef.id);  
            
                
            })
            .catch(err=>{
                console.log("no se guardó");
            })
    
            
        }
            
            const onSubmit = data => {
                    suscripcion(data);
            };
        

    return(
        
        
                    
                    <Form onSubmit={handleSubmit(onSubmit)}> 
                    <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control className="campoFooter"  name="nombre" placeholder="Ingrese su nombre" ref={register({ required: true })} onChange={handleChange}/>
                    {errors.nombre && <div className="err">Debe completar este campo</div>}
                </Form.Group>
                <Row>
                <Col>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="campoFooter" name="email" placeholder="Ingrese su email" ref={register({
                            required: true,
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i },
                        })} onChange={handleChange}/>
                    {errors.email?.type === "required" && (
                        <div className="err">Ingrese una direccion de email válida</div>
                    )}
                    {errors.email?.type === "pattern" && <div className="err">Formato no válido</div>}
                </Form.Group>
                </Col>
                </Row>
                    
                    <span  className="boton-azul mt-2" type="submit"><Link>
                    Suscribirse</Link></span>
                   
                    </Form>
        
    )
}
export default FormContacto;