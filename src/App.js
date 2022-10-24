import './App.css';
import NavBar from './components/NavBar';
import Saludo from './components/ItemListContainer';

function Nav() {
  return (
    <>
    <nav>
      <NavBar/>
      <Saludo text="otra prueba"/> 
    </nav>
    </>
  );
}

export default Nav;
