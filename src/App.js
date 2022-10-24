import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function Nav() {
  return (
    <>
    <nav>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a Pink Urban"/> 
    </nav>
    </>
  );
}

export default Nav;
