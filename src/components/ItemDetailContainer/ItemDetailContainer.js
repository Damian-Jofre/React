import { useLocation } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import './style.css';

const ItemDetailContainer = () => {  
    const { state } = useLocation(); 
 
    return (
        <>
        <div className="detalles">
            <ItemDetail item={state} /> 
        </div>
        </>
    ) 
}

export default ItemDetailContainer