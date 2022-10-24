import React from "react";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
    return (
        <nav className="navegador">
            <div className="iconoMarca">
                <p>Pink Urban</p>
            </div>
            <div className="divUl">
                <ul className="navUl">
                    <li>
                        <a href="#">Zapatos</a>
                    </li>
                    <li>
                        <a href="#">Zapatillas</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
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