import React, { useState, useEffect } from 'react';
import Boton from './Boton';
import { getFirestore, doc, getDocs, collection } from "firebase/firestore";
import ItemList from './ItemList';

function Home() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    const db = getFirestore();
    const itemsRef = collection(db, "Items");

  getDocs(itemsRef)
  .then((querySnapshot) => {
    const items = querySnapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }));
    setProducts(items);
  })
  .catch((error) => console.error("Error obteniendo productos:", error))
  .finally(() => setLoading(false));
}, []);
    return (
    <div>
      <div>
      <h1 style={{ color:'Red'  , fontSize: '36px', textAlign: 'center', margin: "60px" }}>Bienvenid@ a TelaVendo!  </h1>
      <Boton color="Red" label="SALE hasta 70%!" onClick ={()=>alert ("busca la sección SALE")}/>
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
export default Home;