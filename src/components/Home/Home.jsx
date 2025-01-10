import React from 'react';
import Coursel from './Coursel';
import Products from '../Products/Products';

const Home = ({ searchTerm }) => {
  return (
    <div>
      <Coursel />
      <Products searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
