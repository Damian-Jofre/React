import { useNavigate } from "react-router-dom";
import './style.css';

const ItemDetail = ({ item }) => {
    const { id, name, imgeUrl} = item
    const navigate = useNavigate();

    const verDetalle = () => {
        navigate(`/item/${id}`, { state: item })
    }

    return (
        <div className="listProductos">
            <p>Para mas detalle click sobre la imagen</p>
            <div onClick={verDetalle}>
                <div key={id} className="productos">
                    <h3>{name}</h3>  
                    <img className='product-image' src={imgeUrl} alt={name}></img> 
                </div>   
            </div>
        </div>
    ); 
}

export default ItemDetail
