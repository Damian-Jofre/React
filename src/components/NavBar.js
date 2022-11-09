import CartWidget from "./CartWidget";
import { NavLink as Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navegador">
            <div className="divUl">
                <ul className="navUl">
                    <li className="iconoMarca">
                        <Link to='/' activeClassName="active">Pink Urban</Link>
                    </li>
                    <li>
                        <Link to='/category/:contacto' activeClassName="active">Contacto</Link>
                    </li>
                </ul>
                <div className="logo">
                <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar