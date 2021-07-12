import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import './style.css'
import  {Link} from 'react-router-dom';

const ItemCat=({categoriaName, categoriaImg, collapseName})=>{
    const [open, setOpen] = useState(false);
    return(
        <div className="accordion-item  col-12 col-md-4" onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
<img src={categoriaImg}/>
       <h2>{categoriaName}</h2>
      <Collapse in={open}>
        <div className="accordion-body" id={collapseName}>
        <ul>
                <Link to='https://'><li>Decoración </li></Link>
                <li>Jardinería</li>
                <li>Piletero </li>
                <li>Corredor Inmobiliario</li>
                <li>Pintor </li>
                <li>Cerrajero</li>
                <li>Tapicero</li>
              </ul>
              <ul>
                <li>Arquitectura </li>
                <li>Cortinas</li>
                <li>Albañil </li>
                <li>Limpieza </li>
                <li>Control de Plagas</li>
                <li>Plomero</li>
                <li>Electricista</li>
              </ul>
        </div>
      </Collapse>

</div>
    )
}
export default ItemCat;