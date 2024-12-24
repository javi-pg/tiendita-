import React from 'react';

function CartWidget() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span role="img" aria-label="cart" style={{ fontSize: '1.5rem', marginRight: '5px' }}>🛒</span>
      <span>2</span>  {/* Número de items en el carrito */}
    </div>
  );
}
export default CartWidget;