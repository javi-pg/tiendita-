import React, { useContext, useState } from 'react';
import { CartContext } from '../context/Cartcontext';

function ItemList({ products }) {
  const { addToCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, amount) => {
    setQuantities(prevQuantities => {
      const newQuantity = (prevQuantities[productId] || 0) + amount;
      if (newQuantity < 0) return prevQuantities;
      return { ...prevQuantities, [productId]: Math.min(newQuantity, products.find(p => p.id === productId).stock) };
    });
  };

  const handleInputChange = (productId, value) => {
    const newQuantity = Math.max(0, Math.min(value, products.find(p => p.id === productId).stock));
    setQuantities(prevQuantities => ({ ...prevQuantities, [productId]: newQuantity }));
  };

  return (
    <div className="item-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={`/images/${product.image}`} alt={product.name}/>
          <h5>{product.name}</h5>
          <p>${product.price}</p>
          <p>Cantidad disponible: {product.stock} unidades</p>
          <div>
            <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
            <input 
              type="number" 
              value={quantities[product.id] || 0} 
              onChange={(e) => handleInputChange(product.id, parseInt(e.target.value) || 0)} 
            />
            <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
          </div>
          <button onClick={() => addToCart(product, quantities[product.id] || 0)}> 
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;