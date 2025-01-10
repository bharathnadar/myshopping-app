import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import logo from './Colorful Illustrative Online Shop Logo.png';
import styles from './NavBar.module.css';

const NavBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.head}>
          <h1>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </h1>
        </div>
        <div className={styles.searchContainer}>
          <input
            type="search"
            placeholder="Search products..."
            className={styles.search}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.NavItems}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products" className={styles.navLink}>Products</Link>
            </li>
            <li>
              <Link to="/login" className={styles.loginButton}>Login</Link>
            </li>
            <li>
              <Link to="/cart" className={styles.navLink}>
                <h2><FaShoppingCart /></h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
