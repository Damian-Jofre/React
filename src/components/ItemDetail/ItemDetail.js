import './style2.css';
import ItemCount from '../ItemCount/itemCount';

const ItemDetail = ({ item }) => {
    const { id, name, imgeUrl, price, description} = item

    return (
        <div className="listProductos2">
            <p>Estos son los detalles</p>
            <div>
                <div key={id} className="productos2">
                    <h3>{name}</h3>  
                    <img className='product-image2' src={imgeUrl} alt={name}></img> 
                    <p>Precio: {price}</p>
                    <p>Descripción: {description}</p>
                    <ItemCount /> 
                </div>   
            </div>
        </div>
    );   
} 

export default ItemDetail
