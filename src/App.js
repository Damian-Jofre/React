import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './paginas/ItemListContainer';
import ItemDetailContainer from './paginas/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';





function Nav() {
  return (
    <>
    <nav>
      <NavBar/>
    </nav>
        <div>
          <Routes>
            // home
            <Route exact path="/*" element={<ItemListContainer  greeting="Bienvenido a Pink Urban" />} /> 
            // filtro por categorías con idCategory definido en useParams
            {/* <Route exact path='/category/:idCategory' element= {<ItemListContainer />} />
            // contacto
            <Route exact path='/contacto' element={<Contacto />} /> */}
            //// filtro al detalle del producto con idProduct definido en useParams
            <Route exact path="item/:idProduct" element={<ItemDetailContainer />}/>
          </Routes>
      </div>
    </>
  );
}

export default Nav;


