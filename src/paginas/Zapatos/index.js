import React from "react"
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom"
import Stock from "../../components/stock/stock"


const Zapatos = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="">Portafolio</Link>
                </li>
                <li>
                    <Link to="orders">Zapatos</Link>
                </li>
                <li>
                    <Link to="quotes">Quotes</Link>
                </li>
            </ul>
            <div className="dashboard">
                <Routes>
                <Route path="/" element={<Profile />}></Route>
                <Route path="orders" element={<Orders />}></Route>
                <Route path="quotes" element={<Quotes />}></Route>
                <Route path="order_details/:orderId" element={<OrderDetails />} />
                </Routes>
            </div>
        </div>
    )
}
    
export const Profile = () => {
    return <h2>Inicio</h2>
}
export const Orders = () => {
    const prod = Stock
    return (
    <>
        <h2>Orders</h2>
{/*           <ul className="orders">
        {prod.map(orderId => {
            return (
            <div>
                <li key={orderId}>
                    <Link to={`/dashboard/order_details/${orderId}`}>
                        <div>
                        {prod.map((p) => (
                            <div className="productos" key={p.id}>
                                <h3>{p.name}</h3>
                                <img className='product-image' src={p.imgeUrl} alt={p.name}></img>
                            </div>
                            ))}
                        </div>
                    </Link>
                </li>
            </div>
            )
        })}
        </ul> */}
    </>
    )
}
export const Quotes = () => {
    return <h2>Quotes - hijo</h2>
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
            <h2>Details of order</h2>
            <h2>prueba {params.description}</h2>
            <a href="#" onClick={onBackClick}>
              Back to Orders
            </a>
          </>
        )
    }



export default Zapatos