import './Item.css'
import { Link } from 'react-router-dom';


const Item = ({ producto }) => {
    const { id, nombre, imagen, titulo, categoria,  precio} = producto;

    return (
        <div className="producto">
            <img className='imagen' src={imagen} alt={nombre} />
            <div>
                <h4>{titulo}</h4>
                <p>Categoría: {categoria} </p>
                <p>Precio: ${precio} </p>
                <footer>
                    <Link to={`/item/${id}`} className='Option'>Ver Detalle </Link>
                </footer>
            </div>
        </div>
    );
}


export default Item;