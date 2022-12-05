import CategoriasDetail from '../Categorias/Categorias';
import './style.css';

const ItemListContainer = ( { greeting, renderProducts, onFilter, allCategory } ) => {

    return (
    <>
    <h1 className="bienvenido">{ greeting }</h1>
    <div className="inicio">
        <div className="ordenarCat">
            {allCategory && allCategory.map((category) => (
                <CategoriasDetail key={ category.id } { ... category } item={category} onFilter={onFilter} />
            ))}
        </div>
        <div className="ordenarProd" >
        { renderProducts } 
        </div>  
    </div>  
    </>
    ); 
}

export default ItemListContainer
