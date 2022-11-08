import React from "react"
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import Stock from "./stock/stock"
import { useEffect, useState } from "react";
import ItemCount from "./itemCount";

const Dashboard = (props) => {

  return (
    <div>
        <h1>{props.greeting}</h1>
        <ul className="linkProd">
            <li>
                <Link to="zapatos">Zapatos</Link>
            </li>
            <li>
                <Link to="zapatillas">Zapatillas</Link>
            </li>
            <li>
                <Link to="item/*">Item</Link>
            </li>
        </ul>
        <div className="dashboard">
            <Routes>
            <Route path="zapatos" element={<Zapatos />}></Route>
            <Route path="zapatillas" element={<Zapas />}></Route>
            {/* <Route path="item/*" element={<OrderDetails />} /> */}
            <Route path="item/*" element={<ItemDetailContainer />}></Route>
            </Routes>
        </div>
    </div>
  )
}

export const Zapatos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getPRoductos = () => {
          setTimeout(() =>{
            setProductos(Stock);
          }, 1000);
        }
        getPRoductos();
    }, []); 


  return (
    <>
    <h2>Zapatos</h2>
    <div className="listProductos">
        {productos.map(p => {
            return (
                <div key={p}>
                    <Link to={`item/:${p.id}`}>
                    <div className="productos" key={p.id}>
                        <h3>{p.name}</h3>
                        <img className='product-image' src={p.imgeUrl} alt={p.name}></img>
                        <p>{p.description}</p>
                        <ItemCount />
                    </div>
                    </Link>
                </div>
            )
        })}
    </div>
    </>
  )
}
export const Zapas = () => {
  return <h2>Zapatillas</h2>
}
export const OrderDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
  
    const onBackClick = e => {
      e.preventDefault()
      // navigate(-1);
      navigate("/dashboard/orders")
    }
  
    return (
      <>
        <h2>Detalles de las Zapatos</h2>
  {/*       {Stock.map((p) =>(
            <h2>prueba {p.name}</h2>
        ))} */}


        <a href="#" onClick={onBackClick}>
          Back to Orders
        </a>
      </>
    )
}

export default Dashboard