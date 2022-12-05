import './style.css'

const ContenidoCar = ({ item, borrarItemCar }) => {
    const {id, precio, nombre, quantity } = item || {};

    return (
        <div className='car'>
            <div className='contenidoCar'>
                <h4>{nombre}</h4>
                <p>Precio: {precio}</p>
                <p>Cantidad: {quantity}</p>
            </div>
            <button className='btnBorrar' onClick={() => borrarItemCar(id)}>Borrar</button>
        </div>
    )
}

export default ContenidoCar