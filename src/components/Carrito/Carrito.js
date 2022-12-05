import './style.css';

const Carrito = ({ children, isOpenCart, onHandlerCart }) => {


    return (
        <>
        <div className='inicioCarrito'
        style={{
            transform: isOpenCart ? 'translateX(150%)': 'translateY(0vh)'
        }}
        >
            <div className='cierroCart'>
                <button className='btnCart' onClick={onHandlerCart}>Cerrar</button> 
            </div>
            {children}
        </div>
        </>
    )
}

export default Carrito