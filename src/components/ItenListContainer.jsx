import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Boton from "./Boton"

function ItemListContainer () {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Productos
  const fetchProducts = new Promise((resolve) => {
  setTimeout(() => {
    const allProducts = [
      { id: 1, name: 'Blusa negra', category: 'camisas', image: 'blusa-negra.webp', price: 10990, stock: 10 },
      { id: 2, name: 'Blusa blanca', category: 'camisas', image: 'blusa-blanca.webp', price: 22990, stock: 5 },
      { id: 3, name: 'Jeans', category: 'pantalones', image: 'jeans.webp', price: 18990, stock: 6 },
      { id: 4, name: '¡¡Oferta!!: Buzo', category: 'sale', image: 'pantalon-de-buzo.webp', price: 9990, stock: 8 }
  ];
  const filteredProducts = categoryId ? allProducts.filter(product => product.category === categoryId) : allProducts;
  resolve(filteredProducts);
}, 2000);
});

fetchProducts.then((data) => {
setProducts(data);
setLoading(false);
}); 
    return (
    <div className='ItemListContainer'>
      <div>
      <Boton color="Red" label="SALE hasta 70%!" onClick ={()=>alert ("busca la sección SALE")}/>
      <h3>Productos {categoryId ? `de la categoría: ${categoryId}` : 'disponibles'}</h3>
    </div>
     {/* Productos */}
     <div className="product-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </div>

  );
}

export default ItemListContainer;