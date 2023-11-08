import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css'


const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (

<div>
      {cart.length === 0 ? (
        <div className='cart-items'>
          <h1>No hay elementos en el carrito</h1>
          <Link to="/" className='Option'>Productos</Link>
        </div>
      ) : (
        <div className='cart-items'>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <button onClick={() => clearCart()} className='Button'>Limpiar Carrito</button>
          <Link to="/checkout" className='Option'>Checkout</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;