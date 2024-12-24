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
            { id: 1, name: 'Blusa negra', category: 'camisas' },
            { id: 2, name: 'Blusa blanca', category: 'camisas' },
            { id: 3, name: 'Jeans', category: 'pantalones' },
            { id: 4, name: 'Oferta Buzo', category: 'sale' }
          ];
  
          const selectedProduct = allProducts.find(product => product.id === parseInt(id));
          resolve(selectedProduct);
        }, 2000); // Retardo de 2 segundos
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
