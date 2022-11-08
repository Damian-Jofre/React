import React from "react"
import { useRoutes, Outlet } from "react-router"
import { Link } from "react-router-dom"
import Stock from "./stock/stock"

const RouteAsObj = () => {
  let element = useRoutes([
    { path: "/", element: <Route1 /> },
    { path: "route2", element: <Route2 /> },
    {
      path: "route3",
      element: <Route3 />,
      children: [
        { path: "child1", element: <Child1 /> },
        { path: "child2", element: <Child2 /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ])

  return (
    <div>
      <ul>
        <li>
          <Link to="">Route1</Link>
        </li>
        <li>
          <Link to="route2">Zapatos</Link>
        </li>
        <li>
          <Link to="route3">Zapatillas</Link>
        </li>
      </ul>
      {element}
    </div>
  )
}

const Route1 = () => <h1>Route1</h1>
const Route2 = () => {
    const prod = Stock
    return (
        <>
        <h2>Zapatos - a ver</h2>
        <div className="ordenarProd">
            {prod.map(p => {
                return (
                    <div key={p}>
                        <Link to={`item/${p.id}`}>
                            <div>
                                <div className="productos" key={p.id}>
                                    <h3>{p.name}</h3>
                                    <img className='product-image' src={p.imgeUrl} alt={p.name}></img>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
        </>
    )
} 
const Route3 = () => {
  return (
    <div>
      <h1>Route3</h1>
      <ul>
        <li>
          <Link to="child1">Child1</Link>
        </li>
        <li>
          <Link to="child2">Child2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}
const Child1 = () => <h2>Child1</h2>
const Child2 = () => <h2>Child2</h2>
const NotFound = () => <h1>NotFound</h1>

export default RouteAsObj