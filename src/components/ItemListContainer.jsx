import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Boton from "./Boton";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsRef = collection(db, "Items");
    let q;

    if (categoryId) {
      q = query(itemsRef, where("category", "==", categoryId));
    } else {
      q = itemsRef;
    }

    getDocs(q)
      .then((querySnapshot) => {
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(items);
      })
      .catch((error) => console.error("Error obteniendo productos:", error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className='ItemListContainer'>
      <div>
        <Boton color="Red" label="SALE hasta 70%!" onClick={() => alert("busca la sección SALE")} />
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