import iconoCat from "../../images/categorias.png";
import IconCat from './IconCat';
import imgHogar from '../../images/hogar.png'
import imgGastronomia from '../../images/gastronomia.png'
import imgEventos from '../../images/eventos.png'
import imgConstruccion from '../../images/construccion.png'
import imgBelleza from '../../images/belleza.png'
import imgLegal from '../../images/legal.png'
import imgEducacion from '../../images/educacion.png'
function IconsNav(){
    return(
        <>
        
        <div className="categoriaIcono"><IconCat urlImg={imgHogar} catName='Hogar'/></div>
        <div className="categoriaIcono"><IconCat urlImg={imgGastronomia} catName='Gastronomía'/></div>
        <div className="categoriaIcono"><IconCat urlImg={imgEventos} catName='Eventos'/></div>
        <div className="categoriaIcono"><IconCat urlImg={imgConstruccion} catName='Construcción'/></div>
        <div className="categoriaIcono d-none d-md-block"><IconCat urlImg={imgBelleza} catName='Belleza'/></div>
        <div className="categoriaIcono d-none d-md-block"><IconCat urlImg={imgLegal} catName='Legal'/></div>
        <div className="categoriaIcono d-none d-md-block"><IconCat  urlImg={imgEducacion} catName='Educación'/></div>
      
      </>
    )
}
export default IconsNav;