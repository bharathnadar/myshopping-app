import React from 'react';
import Coursel from './Coursel';
import Products from '../Products/Products';

const Home = ({ searchTerm, addToCart }) => { 
  return (
    <div>
      <Coursel />
      <Products searchTerm={searchTerm} addToCart={addToCart} />  
    </div>
  );
};

export default Home;
