import React, { useContext, useState} from 'react';
import { CartContext } from '../context/Cartcontext';


function ItemDetail({ product }) {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1)
    const handleQuantityChange = (e) => {
      const value = parseInt(e.target.value);
      setQuantity(value > 0 && value <= product.stock ? value : 1); 
    };
    return (
      <div>
        <img src={`/images/${product.image}`} alt={product.name} style={{ width: '100px', height: 'auto' }} />
        <h3>{product.name}</h3>
        <p>Precio: ${product.price}</p>
        <p>Categoría: {product.category}</p>
        <p>Stock disponible: {product.stock}</p>
        
        {/* cantidad */}
        <input 
          type="number" 
          name="quantity" 
          value={quantity} 
          min="1" 
          max={product.stock} 
          onChange={handleQuantityChange} 
        />
        {/* Botón para agregar al carrito */}
      <button onClick={() => addToCart(product, quantity)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemDetail;