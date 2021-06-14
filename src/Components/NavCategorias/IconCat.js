import { Col } from 'react-bootstrap';
const IconCat=({catName, urlImg})=>{
    return(
        <Col className='m-0 p-0'>
          <img src={urlImg} alt={catName}/><br/>
          {catName}
        </Col> 
    )
}
export default IconCat;