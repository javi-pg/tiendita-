import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProduct = new Promise((resolve) => {
        setTimeout(() => {
          const allProducts = [
            { id: 1, name: 'Blusa negra', category: 'camisas', image: 'blusa-negra.webp' ,price: 10990, stock: 10 },
            { id: 2, name: 'Blusa blanca', category: 'camisas', image: 'blusa-blanca.webp', price: 22990, stock: 5 },
            { id: 3, name: 'Jeans', category: 'pantalones', image: 'jeans.webp', price: 18990, stock: 6 },
            { id: 4, name: '¡¡Oferta!!: Buzo', category: 'sale', image: 'pantalon-de-buzo.webp', price: 9990, stock: 8 }
          ];
  
          const selectedProduct = allProducts.find(product => product.id === parseInt(id));
          resolve(selectedProduct);
        }, 2000);
      });
      fetchProduct.then((data) => {
        setProduct(data);
        setLoading(false);
      });
    }, [id]);
  
    return (
      <div className="item-detail-container">
        {loading ? <p>Loading...</p> : <ItemDetail product={product} />}
      </div>
    );
  }
  
  export default ItemDetailContainer;
