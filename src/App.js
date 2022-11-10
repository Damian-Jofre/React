import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contacto from './paginas/Contacto/Contacto';

function Nav() {
  return (
    <>
    <nav>
      <NavBar/>
    </nav>
        <div>
          <Routes>
            <Route path="/*" element={<ItemListContainer  greeting="Bienvenido a Pink Urban" />} /> 
            <Route path='/category/:id' element= {<ItemListContainer />} />
            <Route path='category/contacto' element={<Contacto />} />
            <Route path="item/:id" element={<ItemDetailContainer />}/>
          </Routes>
      </div>
    </>
  );
}

export default Nav;


