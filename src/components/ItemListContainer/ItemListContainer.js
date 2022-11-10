import { useEffect, useState } from "react";
import GetStock from "../Stock"
import Card from "../Card/Card";
import './style.css';

const ItemListContainer = ( { greeting } ) => {
    const [products, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

//nuevo

    useEffect(() => {
        setLoading(true);
        GetStock()
            .then((response) => setProductos(response))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false)) 
        }, [])


//hasta aca

    return (
        <div className="inicio">
            <h1>{ greeting }</h1>
            <div className="ordenarProd" >
                {loading ? <h2>Cargando..</h2> : products.map(p => (
                    <Card key={p.id} item={p} /> 
                ))} 
            </div> 
        </div> 
    ); 
}

export default ItemListContainer