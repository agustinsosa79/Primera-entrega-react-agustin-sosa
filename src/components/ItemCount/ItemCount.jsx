import { useState } from 'react';
import './ItemCount.css'


const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);
    console.log(quantity);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > initial) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <div className='control-button'>
                <button  className='btn btn-primary d-i-button boton-count' onClick={decrement}>-</button>
                <h4 className='Number'>{quantity} </h4>
                <button className='btn btn-primary d-i-button boton-count' onClick={increment}>+</button>
                </div>
            </div>
            <div>
                <button className='btn btn-primary btn-lg boton-agregar' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ItemCount