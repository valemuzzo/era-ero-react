import descarga1 from "../../images/descarga1.png";
import descarga2 from "../../images/descarga2.png";
import descargaApp from "../../images/descarga-la-app.jpg";
function Download(){
    return(
    <section id="download" className="d-flex flex-wrap">
      <div className="col-12 col-md-6">
       <video poster={descargaApp} controls>
          
          
        </video>
        
        
      </div>
      
      <div className="col-12 col-md-6 text-center text-md-left">
        <h2>¡Descarga la app!</h2>
        <div className="col-12 col-md-6 pl-0"><h4>Y empezá a ser parte <br/>de esta nueva era.</h4></div>
        <div className="botonDescarga">
          <img src={descarga1} alt="get it on googleplay"/><br/>
          <img src={descarga2} alt="get it on appstore"/>
        </div>
      </div>
    </section> 
    )
}
export default Download;