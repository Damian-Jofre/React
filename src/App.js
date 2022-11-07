import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contacto from './paginas/Contacto';
import Zapatos from './paginas/Zapatos';
import Zapatillas from './paginas/Zapatillas';
import { Route, Routes } from 'react-router-dom';


function Nav() {
  return (
    <>
    <nav>
      <NavBar/>
    </nav>
    <body>
        <main>
          <Routes>
            <Route exact path="/" element={<ItemListContainer  greeting="Bienvenido a Pink Urban" />} /> 
            <Route exact path='item' element= {<ItemDetailContainer />} />
            <Route exact path='/category' element= {<ItemListContainer />} />
            <Route exact path='/contacto' element={<Contacto />} />
            <Route exact path='/zapatos' element={<Zapatos />} />
            <Route exact path='/zapatillas' element={<Zapatillas />} />
          </Routes>
        </main>
    </body>
    </>
  );
}

export default Nav;
