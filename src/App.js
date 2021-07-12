import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";
import  {BrowserRouter, Switch, Route,} from 'react-router-dom';
import Header from './Components/Header';
import Banner from './Components/Banner';
import About from './Components/About';

import NavCategorias from './Components/NavCategorias';
import ItemCatContainer from './Containers/ItemCatContainer';
import ItemSegContainer from './Containers/ItemSegContainer';
import ItemTutContainer from './Containers/ItemTutContainer';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';
import ComoFunciona from './Components/ComoFunciona';
import SoyEro from './Components/SoyEro';
import SoyCliente from './Components/SoyCliente';

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
          <Route exact path='/Seguros' component={ItemSegContainer}></Route>
          <Route exact path='/Tutoriales' component={ItemTutContainer}></Route>
          <Route exact path='/Categorias' component={ItemCatContainer}></Route>
          <Route exact path='/ComoFunciona' component={ComoFunciona}></Route>
          <Route exact path='/SoyEro' component={SoyEro}></Route>
          <Route exact path='/SoyCliente' component={SoyCliente}></Route>
         </Switch>
         <Contacto/>
        <Footer/>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
