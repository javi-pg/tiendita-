import React from 'react';

function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={`/images/${product.image}`} alt={product.name} className="product-image" />
          <h5>{product.name}</h5>
          <p>{product.category}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
