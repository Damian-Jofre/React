import { useLocation } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/itemCount";
import './style.css';

const ItemDetailContainer = () => {  
    const { state } = useLocation();
    const { description} = state

    return (
        <>
        <div className="detalles">
            <p>Detalles</p>
            <ItemDetail item={state} /> 
            {description}
            <ItemCount />
        </div>
        </>
    )
}

export default ItemDetailContainer