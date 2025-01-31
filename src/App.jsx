import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'; 
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.model !== product.model));
  };
  
  return (
    <div>
      <Router>
        <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} addToCart={addToCart} />} />
          <Route path="/products" element={<Products searchTerm={searchTerm} addToCart={addToCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;

