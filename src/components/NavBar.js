import React from "react";
import Logo from "./CartWidget";
import Saludo from "./ItemListContainer";

const NavBar = () => {
    return (
        <nav className="navegador">
            <div className="iconoMarca">
                <Saludo text="Pink Urban" />
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
                <Logo />
                </div>
            </div>
        </nav>
    )
}

export default NavBar