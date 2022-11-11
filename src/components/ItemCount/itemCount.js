import { useState } from "react";
import './style.css';


const ItemCount = ({ item }) => {
    const [contador, setContador] = useState (0)

    const click = () => {
        setContador(contador + 1)
    }

    const click2 = () => {
        setContador(contador - 1)
    }

    return(
        <>
        <div className="contador">
            <div className="botonesCarrito">
                <button className="btnCont" onClick={click2}>-</button>
                <p>{contador}</p>
                <button className="btnCont" onClick={click}>+</button>               
            </div>
            <button className="btnCart">Agregar al carrito</button>
        </div>
        </>
    )
}


export default ItemCount