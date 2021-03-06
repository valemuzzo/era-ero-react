
import {Link} from 'react-router-dom'
function Banner(){
    return(
        <div id="banner" className="d-flex flex-column justify-content-end">
            <h1>Seguros</h1>
            <p> ¿Sabías que podés emitir tu póliza desde<br/>la app al instante,
            desde cualquier lugar y<br/> en el momento que lo necesites?<br/>
            </p>
            <span className="boton-azul mt-2"><Link to="/seguros"> Conoce más</Link></span>
       </div>  
    );
}

export default Banner;