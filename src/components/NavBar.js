import React from "react";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
    return (
        <nav className="navegador">
            <div className="iconoMarca">
                <a href="/">Pink Urban Link</a>
            </div>
            <div className="divUl">
                <ul className="navUl">
                    <li>
                        <a href="/zapatos">Zapatos</a>
                    </li>
                    <li>
                        <a href="/zapatillas">Zapatillas</a>
                    </li>
                    <li>
                        <a href="/contacto">Contacto</a>
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