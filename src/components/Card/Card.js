import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/itemCount";
import './style.css';

const Card = ({ item, sumaProd, restaProd, numItems }) => {
    const { id, img, nombre, stock } = item;
    const navigate = useNavigate();

    const verDetalle = () => {
        navigate(`/item/${id}`, { state: item } )
    } 

    return (
        <div className="listProductos">
            <div onClick={verDetalle}>
                <div key={id} className="productos">
                    <h3>{nombre}</h3>  
                    <img className='product-image' src={img} alt={nombre}></img> 
                </div>   
            </div>
            <div>
                <ItemCount restaProd={restaProd} sumaProd={sumaProd} numItems={numItems} id={id} stock={stock} /> 
            </div> 
        </div>
    );  
}

export default Card