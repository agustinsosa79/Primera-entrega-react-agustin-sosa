import { useState } from 'react';


const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

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
                <button className='btn btn-primary d-i-button' onClick={decrement}>-</button>
                <h4 className='Number'>{quantity} </h4>
                <button className='btn btn-primary d-i-button' onClick={increment}>+</button>
                </div>
            </div>
            <div>
                <button className='btn btn-primary btn-lg' onClick={() => onAdd(quantity)} disabled={!stock}>
                    agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ItemCount