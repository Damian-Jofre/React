import { useNavigate } from "react-router-dom";
import './style2.css';

const ItemDetail = ({ item }) => {
    const { id, categoria, descripcion, img, nombre, precio, stock } = item

    const navigate = useNavigate();

    const volver = () => {
        navigate(`/`)
    } 

    return (
        <div className="listProductos2"> 
            <div className='detalles'>
                <div className='detalleImg'>
                    <img className='product-image2' src={img} alt={nombre}></img> 
                </div>
                <div key={id} className="productos2">
                    <h3>{nombre}</h3>  
                    <h4>{categoria}</h4>
                    <p>Precio: {precio}</p>
                    <p>{descripcion}</p>
                    <p>Stock: {stock}</p>
                    <button className="btnVolver" onClick={volver}>Volver</button>
                </div>   
            </div>         
        </div>
    );  
} 

export default ItemDetail

