import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useEffect, useState } from "react";
import Card from './components/Card/Card';
import Spinner from './components/Loader/Spiner';
import Carrito from './components/Carrito/Carrito'
import ContenidoCar from './components/ContenidoCar/ContenidoCar';
import FirebaseServices from "./services/firebase"
import { totalCart } from "./utils";
import './App.css';

function Nav() {
    const [allProducts, setAllProducts] = useState(null);
    const [allCategory, setAllCategories] = useState(null);
    const [isFiltering, setIsFiltering] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(null);
    const [carrito, setCarrito] = useState([]);
    const [isOpenCart, setIsOpenCart] = useState(false);
    const [setCarritoId] = useState(null);
    const { getProducts, getCategories, getProductsByCategory, createOrder } = FirebaseServices

    useEffect(() => {
        const listarDatos = async () => {
            try {
                const products = await getProducts();
                const categories = await getCategories();
                setAllProducts(products);
                setAllCategories(categories);
            } catch (error) {
                console.log(error);
            }
        }
        listarDatos();
    }, [getCategories, getProducts]);

    const onFilter = async (categoryId) => {
        const filtroCat = await getProductsByCategory(categoryId);
        setFilteredProducts(filtroCat);
        setIsFiltering(true);
    } 

    const renderProducts = () => {
        switch(true) {
            case isFiltering && filteredProducts?.length === 0:
                return <h1>Proximamente lo sorprenderemos con nuevos productos</h1>;
            case isFiltering && filteredProducts?.length > 0:
                return filteredProducts.map((product) => (
                    <Card 
                        key={product.id} 
                        item={product} 
                        restaProd={restaProd} 
                        sumaProd={sumaProd} 
                        numItems={numItems(product.id)} 
                        id={product.id}
                    />
                ));
            case !isFiltering && allProducts?.length > 0:
                return allProducts.map((product) => (
                    <Card 
                    key={product.id} 
                    item={product} 
                    restaProd={restaProd} 
                    sumaProd={sumaProd} 
                    numItems={numItems(product.id)} 
                    id={product.id}
                />
                ));
            default:
                return <Spinner />;            
        }
    }

    const restaProd = (id) => {
        setCarrito(carritoActual => {  
            if(carritoActual?.find(item => item.id === id)?.quantity === 1) {
                return carritoActual.filter(item => item.id !== id);
                } else {
                    return carritoActual?.map(item => {
                    if(item.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    const sumaProd = (id) => {
        const item = !isFiltering ? allProducts?.find((product) => product.id === id) : filteredProducts?.find((product) => product.id === id);
        if(carrito?.find((product) => product.id === id)?.quantity === item?.stock) return;
        if(carrito?.length === 0){
            setCarrito([{ ...item, quantity: 1 }]);
            setIsOpenCart(!isOpenCart);
        } else if(carrito.length > 0 && !carrito?.find(item => item.id === id)) {
            setCarrito([...carrito, { ...item, quantity: 1 }]);
        } else {
            setCarrito(carritoActual => {
                return carritoActual.map((product) => {
                    if(product.id === id) {
                        return { ...product, quantity: product.quantity + 1 };
                    } else {
                        return product;
                    }
                });
            });
        }
    }

    const numItems = (id) => {
        return carrito?.find(item => item.id === id)?.quantity || 0;
    }

    const totalCarrito = totalCart(carrito);

    const onHandlerCart = () => {
        setIsOpenCart(!isOpenCart);
    }

    const confirmarCar = async () => {
        const miCompra = {
            user: {
                name: 'pepe',
                email: 'pp@gmail.com'

            },
            items: carrito,
            total: totalCarrito,
        }
        const orderId = await createOrder(miCompra);
        setCarritoId(orderId);
        setCarrito([]);
        setIsFiltering(false);
        onHandlerCart(); 
    };

    const borrarItemCar = (id) => {
        setCarrito(carritoActual => {
            return carritoActual.filter(item => item.id !== id);
        });
    }

    return (
        <>
        <div>
            <NavBar numItems={carrito.length} onHandlerCart={onHandlerCart} /> 
            <Routes>
            <Route path="/*" element={<ItemListContainer  greeting="Bienvenido a Pink Urban" allCategory={allCategory} renderProducts={ renderProducts() } onFilter={onFilter} />} /> 
            <Route path='/category/:id' element= {<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />}/>
            </Routes>
        </div>
        <Carrito isOpenCart={isOpenCart} onHandlerCart={onHandlerCart}>
        {carrito.length > 0 ? (
            <>
            {carrito.map((item) => (
                <ContenidoCar item={item} key={item.id} borrarItemCar={borrarItemCar} />
            ))}
            <div>
                <h3>Subtotal</h3>
                <h3>Total: ${totalCarrito}</h3>
            </div>
            <button className="confirmarCar" onClick={confirmarCar}>Confirmar Compra</button>
            </>
        )
        : (
            <h2 className='cartVacio'>Su carrito está vacio</h2>
        )}    
        </Carrito>  
        </>
    );

}

export default Nav;