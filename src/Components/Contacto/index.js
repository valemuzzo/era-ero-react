import DatosContacto from './DatosContacto';
import FormContacto from './FormContacto';

function Contacto (){
    return(
        <section id="contacto" class="d-flex row justify-content-md-around mb-0">
            <div className="d-flex row justify-content-around mx-0">
                
                <DatosContacto/>
            </div>

                <div className="newsletter col-12 col-md-6 p-0">
                    <h2>Recibí Novedades</h2>
                    <FormContacto/>
                </div>
                
            
        </section>
    )
}
export default Contacto;