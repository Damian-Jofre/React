import CartWidget from "../Cartwidget/CartWidget";
import { NavLink as Link } from "react-router-dom"
import './style.css';

const NavBar = ({ numItems, onHandlerCart }) => {
    return (
        <nav className="navegador">
            <div className="divUl">
                <ul className="navUl">
                    <li className="iconoMarca">
                        <Link to='/'>Pink Urban</Link>
                    </li>
                </ul>
                <div className="logo">
                <CartWidget numItems={numItems}  onHandlerCart={onHandlerCart} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar