import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4>About Us</h4>
          <p>We are committed to providing the best online shopping experience.</p>
        </div>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Contact Us</h4>
          <p>Email: mailbharath.889@gmail.com</p>
          <p>Phone: +91 897 148 0513</p>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>&copy; {new Date().getFullYear()} Bharath's Online Solution. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
