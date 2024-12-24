import React from 'react';

function ItemDetail({ product }) {
  return (
    <div className="product-detail">
      <img src={`https://via.placeholder.com/300?text=${product.name}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: $100</p>
      <p>Categoría: {product.category}</p>
    </div>
  );
}

export default ItemDetail;