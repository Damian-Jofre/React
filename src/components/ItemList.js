import { Link } from "react-router-dom"

const ItemList = ({ products }) => {
    return (
        <div className='listProductos'>
            {products.map((product) => (
                <div className="productos" key={product.id}>
                    <h3>{product.name}</h3>                  
                    <Link to={`:${product.id}`} ><img className='product-image' src={product.imgeUrl} alt={product.name}></img></Link>  
                </div>
                )
            )}
        </div> 
    )
}

export default ItemList


