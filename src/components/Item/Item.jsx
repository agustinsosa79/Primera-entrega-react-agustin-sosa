import './Item.css'
import ItemCount from '../ItemCount/ItemCount';


const Item = ({ producto }) => {
    const { nombre, imagen, titulo, categoria,  precio, stock } = producto;

    return (
        <div className="producto">
            <img className='imagen' src={imagen} alt={nombre} />
            <div>
                <h4>{titulo}</h4>
                <p>Categoría: {categoria} </p>
                <p>Precio: ${precio} </p>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log(`Se agregaron ${quantity} al carrito`)} />
            </div>
        </div>
    );
}


export default Item;