import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgKwnsN9BvqLN93ADUD4TcJsWqQBOftCo",
  authDomain: "tienda-ce47c.firebaseapp.com",
  projectId: "tienda-ce47c",
  storageBucket: "tienda-ce47c.firebasestorage.app",
  messagingSenderId: "962997801250",
  appId: "1:962997801250:web:06904b9ffd2547469d157b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

createRoot(document.getElementById('root')).render(
   <>
   <App />
   </>
    
)
