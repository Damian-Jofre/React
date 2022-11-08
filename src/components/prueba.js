import React from "react"
import Stock from "./stock/stock"

const Prueba = () => {
    const prod = Stock
  return (
    <div>
        {prod.map((p) => (
            <div className="productos" key={p.id}>
                <h3>{p.name}</h3>
                <img className='product-image' src={p.imgeUrl} alt={p.name}></img>
                <p>{p.description}</p>
            </div>
            )
        )}
    </div>
  )
}

export default Prueba