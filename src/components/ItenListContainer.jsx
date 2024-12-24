import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Boton from "./Boton"

function ItemListContainer () {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const message = "¡Bienvenido a nuestra tienda online!";

  // Productos
  const fetchProducts = new Promise((resolve) => {
  setTimeout(() => {
    const allProducts = [
    { id: 1, name: 'Blusa negra', category: 'camisas', image:'/images/blusa-negra.webp' , price: 10990 },
    { id: 2, name: 'Blusa blanca', category: 'camisas', image: '/images/blusa-blanca.webp', price: 22990 },
    { id: 3, name: 'Jeans', category: 'pantalones', image: '/images/jeans.webp', price: 18990 },
    { id: 4, name: 'Oferta Buzo', category: 'sale', image: '/images/pantalon-de-buzo.webp', price: 9990 }
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
      <h2>{message}</h2>
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