import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import ItemDetail from "../components/ItemDetail";
import ItemList from "../components/ItemList";
import Stock from "../components/Stock";

const ItemDetailContainer = () => {
    const [products, setProductos] = useState([]);

    useEffect(() => {
        const getProductos = () => {
          setTimeout(() =>{
            setProductos(Stock);
          }, 2000);
        }
        getProductos();
    }, []); 

    return (
        <>
            <h2>ITEM Detial</h2>
            <Routes>
                <Route 
                    index 
                    element={<ItemList products={products} />} />
                <Route path=":Id" element={<ItemDetail />} />
            </Routes>
        </>
    )
}

export default ItemDetailContainer