import React from 'react';
import './CartItem.css'

const CartItem = ({ item }) => {
  const { nombre, precio, quantity } = item;

  return (
    <div className="cart-item">
      <div className="item-details">
        <p><strong>Producto:</strong> {nombre}</p>
        <p><strong>Precio:</strong> ${precio}</p>
        <p><strong>Cantidad:</strong> {quantity}</p>
        <h5>Total del producto: ${Number(precio * quantity)}</h5>
      </div>
    </div>
  );
};



export default CartItem;