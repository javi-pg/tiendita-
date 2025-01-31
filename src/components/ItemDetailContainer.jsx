import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const db = getFirestore();
      const itemRef = doc(db, "Items", id);

      getDoc(itemRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            setProduct({ id: docSnap.id, ...docSnap.data() });
          } else {
            console.error("No such document!");
          }
        })
        .catch((error) => console.error("Error getting document:", error))
        .finally(() => setLoading(false));
    }, [id]);
  
    return (
      <div className="item-detail-container">
        {loading ? <p>Loading...</p> : <ItemDetail product={product} />}
      </div>
    );
  }
  
  export default ItemDetailContainer;