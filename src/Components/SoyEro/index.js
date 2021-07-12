import {Link} from 'react-router-dom';
import imgMovil from '../../images/movil-como-funciona.png';
import descarga1 from '../../images/descarga1.png';
import descarga2 from '../../images/descarga2.png';

function SoyEro(){
    return(
        <>
        <div className="como-funciona-top text-center">
            <h2 className="nar">¿Cómo Funciona?</h2>
                <div className="d-flex flex-row justify-content-center">
                    <span className="soy-ero">
                    <Link to="/SoyEro">Soy Ero </Link>
                    </span> | 
                    <span className="soy-cliente">
                    <Link to="/SoyCliente"> Soy Cliente</Link>
                    </span>
                </div>
            </div>
        <div className="white-section d-flex flex-row">
                <div className="col-4 text-left text-md-center">
                <img src={imgMovil} width="80%"/>
                </div>
                <div className="Pasos col-6 col-md-4 text-left p-0">
                    <p>Paso 1</p>
                    <h3>Descargá la APP</h3>
                    <p>Descargá la Era Ero desde Google Play o AppStore.<br/>
                    <b>¡Es simple, fácil y rápido!</b><br/>
                    </p>
                    <img src={descarga1} width="50%"/><br/>
                    <img src={descarga2} width="50%"/>
                </div>
                <div className="navegacion-pasos col-2 col-md-4">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                
                </div>
        </div>
        </>
    )
}

export default SoyEro;