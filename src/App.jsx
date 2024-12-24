import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBarr';
import ItemListContainer from './components/ItenListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
    <NavBar/>
     <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
