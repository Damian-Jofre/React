import React from "react"
import Stock from "./stock/stock";

const ItemDetailContainer = () => {
    return (
        <div className="inicio">
            <p>HOLA ITEM</p>
            <div className='listProductos'>
                {Stock.map((p) => (
                    <div className="productos" key={p.id}>
                        <h3>{p.name}</h3>
                        <img className='product-image' src={p.imgeUrl} alt={p.name}></img>
                        <p>{p.description}</p>
                    </div>
                    )
                )}
            </div>
        </div>
    );
}

export default ItemDetailContainer