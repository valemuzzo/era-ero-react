
import  {Link} from 'react-router-dom';

const ItemSeg=({seguroName, seguroImg, seguroTexto})=>{
    
    return(
      <div className="seguro mb-3">
          <Link><img src={seguroImg}/></Link>
          <h2>{seguroName}</h2>
          <p>
          {seguroTexto} 
          </p>
        </div>

    )
}
export default ItemSeg;