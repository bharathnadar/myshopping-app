import React from 'react';
import styles from './Cart.module.css';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart Details:"</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty..</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <p>Brand: {item.brand}</p>
              <p>Model: {item.model}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
