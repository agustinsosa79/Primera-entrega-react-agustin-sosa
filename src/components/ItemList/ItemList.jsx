import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({ productos }) => {
    return (
        <div className="tarjetas">
            {productos.map((prod) => (
                <Item key={prod.id} producto={prod} />
            ))}
        </div>
    );
}

export default ItemList;