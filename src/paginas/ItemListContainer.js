import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom"
import Stock from "../components/Stock";
import ItemCount from "../components/itemCount";
import Contacto from "./Contacto"
import ItemDetailContainer from "./ItemDetailContainer";
import ItemDetail from "../components/ItemDetail";
import ItemList from "../components/ItemList";


const ItemListContainer = (props) => {
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
        <div className="inicio">
            <Routes>
                <Route exact path="/category/:id" element={<Contacto />} />
            </Routes>
            <h1>{props.greeting}</h1>
            <Routes>
                <Route 
                    index 
                    element={<ItemList products={products} />} />
                <Route path=":Id" element={<ItemDetail />} />
            </Routes>
        </div>
    ); 
}

export default ItemListContainer