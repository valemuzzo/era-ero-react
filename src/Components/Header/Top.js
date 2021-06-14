import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
function Top(){
    return(
     <div className="top d-flex justify-content-between">
          <div className="logo"><Link to='/'>ero</Link></div>
       <div className="buscador">
        <div className="input-group my-2">
          <input type="search" className="campoSearch" />
          <span id="search">
          <FontAwesomeIcon inverse icon={faSearch} />
          </span>
        </div>
      </div>
    </div>
    )
}
export default Top;