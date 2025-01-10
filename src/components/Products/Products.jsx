import React from 'react';
import ProductsData from './Products.json'; 
import styles from './Products.module.css';

const Products = ({ searchTerm, addToCart }) => {
  const filteredProducts = ProductsData.mobiles.filter((product) =>
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '10px' }}>Products Details</h1>
      <section className={styles.section}>
        {filteredProducts.map((product) => (
          <div className={styles.cards} key={product.model}>
            <div className={styles.img}>
              <img src={product.image} alt="Product Thumbnail" />
            </div>
            <div className={styles.text}>
              <div className={styles.content1}>
                <p>Brand: {product.brand}</p>
                <p>Storage: {product.specifications.storage}</p>
                <p>Battery: {product.specifications.battery}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
              </div>
              <div className={styles.content2}>
                <div className={styles.content2s1}>
                  <p>Model: {product.model}</p>
                  <p>Color: {product.specifications.color}</p>
                </div>
                <div className={styles.content2s2}>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
