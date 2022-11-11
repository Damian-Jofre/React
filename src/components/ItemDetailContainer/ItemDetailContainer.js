import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetStock from "../Stock";
import ItemDetail from "../ItemDetail/ItemDetail";

import './style.css';

const ItemDetailContainer = () => {  
    const [products, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const params = useParams(); 
    const id = (parseFloat(params.id))


    useEffect(() => {
        setLoading(true);
        GetStock()
            .then((response) => setProductos(response.find(products => products.id === (id))))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false)) 
        }, [])

    return (
        <div className="detalles">
            <p>Detalles</p>
            {loading ? <h2>Cargando..</h2> : <ItemDetail item={products} />} 
        </div>
    )

}

export default ItemDetailContainer