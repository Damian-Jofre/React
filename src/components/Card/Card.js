import { Link } from "react-router-dom";
import './style.css';

const Card = ({ item }) => {
    const { id, name, imgeUrl} = item

    return (
        <div className="listProductos">
            <p>Para mas detalle click sobre la imagen</p>
            <Link to={`/item/${id}`}>
                <div>
                    <div key={id} className="productos">
                        <h3>{name}</h3>  
                        <img className='product-image' src={imgeUrl} alt={name}></img> 
                    </div>   
                </div>
            </Link>
        </div>
    );  
}

export default Card