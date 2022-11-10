import { useEffect, useState } from "react";
import Stock from "../Stock";
import ItemDetail from "../ItemDetail/ItemDetail";
import './style.css';

const ItemListContainer = ( { greeting } ) => {
    const [products, setProductos] = useState([]);

    useEffect(() => {
        const getPRoductos = () => {
          setTimeout(() =>{
            setProductos(Stock);           
          }, 2000);
        }
        getPRoductos();
    }, []); 

    return (
        <div className="inicio" >
            <h1>{ greeting }</h1>
            <div className="ordenarProd" >
                {products.map(p => (
                    <ItemDetail key={p.id} item={p} />
                ))} 
            </div>
        </div> 
    ); 
}

export default ItemListContainer