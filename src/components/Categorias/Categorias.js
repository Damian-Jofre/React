import './style.css'

const CategoriasDetail = ({ item, onFilter }) => {
    const { id, nombre } = item

    return (
        <div className='ordenarCat'>
            <div className="categorias">
                <button 
                    className='btnCat' 
                    id={id} 
                    onClick={() =>  onFilter(id)}
                >
                    {nombre}
                </button>
            </div>
        </div>
    );  
} 

export default CategoriasDetail