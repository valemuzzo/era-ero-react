import descarga1 from "../../images/descarga1.png";
import descarga2 from "../../images/descarga2.png";

function Download2(){
    return(
    <section id="download" className="d-flex flex-wrap">
      <div className="col-12 col-md-3"></div>
      <div className="col-12 col-md-4 text-center text-md-left">
       
        <h2>¡Descarga la app!</h2>
        <div className=" pl-0"><h4>Y empezá a ser parte <br/>de esta nueva era.</h4></div>
        
      </div>
      
      <div className="col-12 col-md-2 text-center text-md-left">
        
        <div className="botonDescarga mt-2">
          <img src={descarga1} alt="get it on googleplay"/><br/>
          <img src={descarga2} alt="get it on appstore"/>
        </div>
      </div>
      <div className="col-12 col-md-3"></div>
    </section> 
    )
}
export default Download2;