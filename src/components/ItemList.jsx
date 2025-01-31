import React, { useContext } from 'react';
import { CartContext } from '../context/Cartcontext';


function ItemList({ products }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="item-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={`/images/${product.image}`} alt={product.name}/>
          <h5>{product.name}</h5>
          <p>${product.price}</p>
          <p>Cantidad disponible: {product.stock} unidades</p>
          <button onClick={() => addToCart(product, 1)}> 
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
