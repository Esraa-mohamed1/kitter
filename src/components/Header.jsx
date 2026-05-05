import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsNavActive(false);
    setIsSearchActive(false);
  }, [location]);

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
        <button 
          className={`nav-toggle-btn ${isNavActive ? 'active' : ''}`} 
          aria-label="toggle menu" 
          onClick={() => setIsNavActive(!isNavActive)}
          data-nav-toggler
        >
          <ion-icon name="menu-outline" aria-hidden="true" class="menu-icon"></ion-icon>
          <ion-icon name="close-outline" aria-hidden="true" class="close-icon"></ion-icon>
        </button>

        <Link to="/" className="logo">Kitter</Link>

        <nav className={`navbar ${isNavActive ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link" data-nav-link>Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/shop" className="navbar-link" data-nav-link>Shop</Link>
            </li>
            <li className="navbar-item">
              <Link to="/collections" className="navbar-link" data-nav-link>Collections</Link>
            </li>
            <li className="navbar-item">
              <Link to="/blogs" className="navbar-link" data-nav-link>Blogs</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link" data-nav-link>Contact</Link>
            </li>
          </ul>
          <Link to="/login" className="navbar-action-btn">Log In</Link>
        </nav>

        <div className="header-actions">
          <button className="action-btn" aria-label="Search" onClick={() => setIsSearchActive(true)}>
            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
          </button>
          <button className="action-btn user" aria-label="User">
            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
          </button>
          <Link to="/cart" className="action-btn" aria-label="cart">
            <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
            <span className="btn-badge">{cartCount}</span>
          </Link>
        </div>
      </div>

      {/* Search Overlay */}
      <div className={`search-container ${isSearchActive ? 'active' : ''}`} data-search-container>
        <div className="search-box">
          <input 
            type="search" 
            name="search" 
            placeholder="Search here..." 
            className="search-field"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-submit" aria-label="Submit" onClick={() => window.location.href = `/shop?search=${searchQuery}`}>
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
        <button className="search-close-btn" aria-label="Cancel" onClick={() => setIsSearchActive(false)}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
    </header>
  );
};

export default Header;
