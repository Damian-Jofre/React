import { useParams} from "react-router-dom"
import ItemCount from "./itemCount"

const ItemDetail = () => {
    const { Id } = useParams()

    return (
        <>
        <h4>detalles productos: {Id}</h4>
        <ItemCount />
        </>
    )
}

export default ItemDetail
