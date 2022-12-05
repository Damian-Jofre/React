import './style.css';

const ItemCount = ({ id, sumaProd, restaProd, numItems, stock }) => {

    return(
        <>
        <div className="contador">
            <div className="botonesCarrito">
                <button disabled={numItems == 0} className="btnCont" onClick={() => restaProd(id)}>-</button> 
                <input 
                    disabled
                    className="inputCart"
                    type="text"
                    value={numItems}
                />
                <button disabled={numItems == stock} className="btnCont" onClick={() => sumaProd(id)}>+</button>
            </div>
        </div>
        </>
    )
}


export default ItemCount