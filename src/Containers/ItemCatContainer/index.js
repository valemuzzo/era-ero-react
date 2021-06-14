import Download2 from '../../Components/Download/Download2';
import ItemCat from '../../Components/ItemCat';
import imgHogar from '../../images/hogar.png';
import imgGastronomia from '../../images/gastronomia.png';
import imgEventos from '../../images/eventos.png';
import imgConstruccion from '../../images/construccion.png';
import imgBelleza from '../../images/belleza.png';
import imgEducacion from '../../images/educacion.png';
function ItemCatContainer(){
    return(<>
        <div className="encabezado-color d-flex flex-column justify-content-end">
        <h1>Categorías</h1>
        <h3> Conocé todas las categorías en las que podés anotarte</h3>
        </div>      
    <section id="categorias d-flex">
      <div className="catPrincipales d-flex flex-wrap">
      <div class="accordion col-12 d-flex flex-wrap">
        
        <ItemCat categoriaName={"Hogar"} categoriaImg={imgHogar} collapseName="1" />
        <ItemCat categoriaName={"Gastronomía"} categoriaImg={imgGastronomia} collapseName="2" />
        <ItemCat categoriaName={"Construcción"} categoriaImg={imgConstruccion} collapseName="3" />
        <ItemCat categoriaName={"Eventos"} categoriaImg={imgEventos} collapseName="4" />
        <ItemCat categoriaName={"Belleza"} categoriaImg={imgBelleza} collapseName="5" />
        <ItemCat categoriaName={"Educación"} categoriaImg={imgEducacion} collapseName="6" />
    </div>
      </div>
        </section>
        <Download2/>
        </>
    )
}
export default ItemCatContainer;