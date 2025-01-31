import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBarr';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error from './components/Error';
import { CartProvider } from './context/Cartcontext';
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from './components/Cart';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <CartProvider>
    <Router>
    <NavBar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element = {<Cart/>} />
        <Route path= "*" element={<Error/>} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
