import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import RouteAsObj from './components/RouteAsObj';
import Contacto from './paginas/Contacto';




function Nav() {
  return (
    <>
    <nav>
      <NavBar/>
    </nav>
        <div>
        <Routes>
          <Route exact path="/" element={<ItemListContainer  greeting="Bienvenido a Pink Urban" />} /> 
          <Route exact path='/category' element= {<ItemListContainer />} />
          <Route exact path='category/:contacto' element={<Contacto />} />
          <Route exact path="category/dashboard/*" element={<Dashboard />}></Route>
          <Route exact path="/category/object_route/*" element={<RouteAsObj />}></Route> 
          <Route exact path="item/*" element={<ItemDetailContainer />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Nav;
