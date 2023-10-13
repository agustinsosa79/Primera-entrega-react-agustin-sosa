import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";
import { useState } from 'react'

const ItemDetail = ({id, nombre, categoria, descripcion, precio, imagen, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)  

    const HandleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }
    
    return (
        <div className='ProductDetailPage'>
            <div className='ProductDetailContainer'>
                <header className='ProductHeader'>
                    <h2>{nombre}</h2>
                </header>
                <picture>
                    <img src={imagen} alt={nombre} className='ProductImg' />
                </picture>
                <section className='ProductInfo'>
                    <p><strong>Categoría:</strong> {categoria}</p>
                    <p><strong>Descripción:</strong> {descripcion}</p>
                    <p><strong>Stock:</strong> {stock}</p>
                    <p className='ProductPrice'><strong>Precio:</strong> ${precio}</p>
                </section>
                <footer className='ProductFooter'>
                    {
                        quantityAdded > 0 ? (
                            <Link to={'/cart'} className="Option">Terminar compra</Link>
                        ) : (
                            <ItemCount
                        initial={1}
                        stock={stock}
                        onAdd={HandleOnAdd}
                    />
                        )
                    }
                </footer>
            </div>
        </div>
    );
};

export default ItemDetail