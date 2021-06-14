import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";
import  {BrowserRouter, Switch, Route,} from 'react-router-dom';
import Header from './Components/Header';
import Banner from './Components/Banner';
import About from './Components/About';

import NavCategorias from './Components/NavCategorias';
import ItemCatContainer from './Containers/ItemCatContainer';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';
import ComoFunciona from './Components/ComoFunciona';

function App() {
  
  return (
    <div className="contenedor">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Banner/>
            <About/>
            
            <NavCategorias/>
          </Route>
          <Route exact path='/Seguros'></Route>
          <Route exact path='/Tutoriales'></Route>
          <Route exact path='/Categorias' component={ItemCatContainer}></Route>
          <Route exact path='/ComoFunciona' component={ComoFunciona}></Route>
         </Switch>
         <Contacto/>
        <Footer/>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
