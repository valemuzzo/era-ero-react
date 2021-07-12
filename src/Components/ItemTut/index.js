import  {Link} from 'react-router-dom';

const ItemTut=({tutName, tutImg})=>{
    
    return(
      <div className="tuto col-12 col-md-4">
          <img src={tutImg}/>
          <Link>{tutName}</Link>
          
        </div>

    )
}
export default ItemTut;