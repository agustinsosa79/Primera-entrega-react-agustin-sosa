import './Item.css'
import { Link } from 'react-router-dom';


const Item = ({ producto }) => {
    const { id} = producto;

    return (
        <div className="producto">
            <img className='imagen' src={producto.imagen} alt={producto.nombre} />
            <div>
                <h4>{producto.titulo}</h4>
                <p>Categoría: {producto.categoria} </p>
                <p>Stock: {producto.stock} </p>
                <p>Precio: ${producto.precio} </p>
                <footer>
                    <Link to={`/item/${id}`} className='Option'>Ver Detalle </Link>
                </footer>
            </div>
        </div>
    );
}


export default Item;