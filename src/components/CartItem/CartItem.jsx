import React from 'react';

const CartItem = ({ item }) => {
  const { nombre, precio, quantity } = item;

  return (
<div className="cart-item">
      <div className="item-details">
        <p><strong>Producto:</strong> {nombre}</p>
        <p><strong>Precio:</strong> ${precio}</p>
        <p><strong>Cantidad:</strong> {quantity}</p>
        <h3>Total: ${ precio * quantity} </h3>
      </div>
    </div>
  );
};


 
export default CartItem;