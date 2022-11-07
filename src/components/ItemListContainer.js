import React from "react"
import { useNavigate } from "react-router-dom";
import Stock from "./stock/stock";
import ItemCount from "./itemCount";
import { useEffect, useState } from "react";

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);
    const navigate = useNavigate();

    const imgDescripcion = (p) => {
            console.log(p.id)
    }

    useEffect(() => {
        const getPRoductos = () => {
          setTimeout(() =>{
            setProductos(Stock);
          }, 2000);
        }
        getPRoductos();
    }, []); 

    return (
        <div className="inicio">
            <h1>{props.greeting}</h1>
            <div className='listProductos'>
                {productos.map((p) => (
                    <div className="productos" key={p.id}>
                        <h3>{p.name}</h3>
                        <img className='product-image' src={p.imgeUrl} alt={p.name}onClick={imgDescripcion}></img>
                        <p>{p.description}</p>
                        <ItemCount />
                    </div>
                    )
                )}
            </div>
        </div>
    );
}

export default ItemListContainer