import Ero from '../../images/soy_ero.png'
import Cliente from '../../images/soy_cliente.png'
import Download2 from '../Download/Download2';
import {Link} from 'react-router-dom'
function ComoFunciona(){
    return(<>
<div className="como-funciona text-center">
    <h2 className="nar">¿Cómo Funciona?</h2>
    <p>Selecciona entre las siguientes funciones para descubir cómo formar parte</p>
    <div className="d-flex flex-row justify-content-center">
<div className="soy-ero"><Link to="/SoyEro"><img src={Ero}/><br/>Soy Ero</Link></div>
<div className="soy-cliente"><Link to="/SoyCliente"><img src={Cliente}/><br/>Soy Cliente</Link></div>
</div>
</div>
<Download2/></>
    )
}
export default ComoFunciona;