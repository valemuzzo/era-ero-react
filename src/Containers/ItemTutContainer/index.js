import ItemTut from '../../Components/ItemTut';
import imgTut from '../../images/imagen.png';
function ItemTutContainer(){
    
      return(
      <>
        <div id="bannertutoriales" className="d-flex flex-column justify-content-end">
            <h1>Tutoriales</h1>
            <p>Todo lo que necesitas saber sobre la Era Ero</p>
        </div>  
        <section id="tutoriales d-flex">
        <div className="tutorial d-flex flex-wrap">
        <ItemTut tutName={"Nombre del Tutorial"} tutImg={imgTut}/>
        <ItemTut tutName={"Nombre del Tutorial"} tutImg={imgTut}/>
        <ItemTut tutName={"Nombre del Tutorial"} tutImg={imgTut}/>
        <ItemTut tutName={"Nombre del Tutorial"} tutImg={imgTut}/>
        <ItemTut tutName={"Nombre del Tutorial"} tutImg={imgTut}/>
        <ItemTut tutName={"Nombre del Tutorial"} tutImg={imgTut}/>
        </div>
        <div className="tutorial d-flex flex-wrap mt-4 mb-5">
        <h4>También puede interesarte</h4><br/>
        <ItemTut tutName={"Nombre del Tutorial"} tutImg={imgTut} tutTexto={"Próximamente"}/>
        <ItemTut tutName={"Nombre del Tutorial"} tutImg={imgTut} tutTexto={"Próximamente"}/>
        <ItemTut tutName={"Nombre del Tutorial"} tutImg={imgTut} tutTexto={"Próximamente"}/>
        
        </div>
        </section>
      </>
      )}

      export default ItemTutContainer;