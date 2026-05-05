import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const MobileBottomNav = () => {
  const { cartCount } = useCart();

  return (
    <div className="mobile-bottom-nav">
      <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
        <ion-icon name="home-outline"></ion-icon>
        <span>Home</span>
      </NavLink>
      <NavLink to="/shop" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
        <ion-icon name="grid-outline"></ion-icon>
        <span>Shop</span>
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
        <div style={{ position: 'relative' }}>
          <ion-icon name="cart-outline"></ion-icon>
          {cartCount > 0 && (
            <span className="btn-badge" style={{ top: '-5px', right: '-8px' }}>
              {cartCount}
            </span>
          )}
        </div>
        <span>Cart</span>
      </NavLink>
      <NavLink to="/blogs" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
        <ion-icon name="newspaper-outline"></ion-icon>
        <span>Blog</span>
      </NavLink>
      <NavLink to="/login" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
        <ion-icon name="person-outline"></ion-icon>
        <span>User</span>
      </NavLink>
    </div>
  );
};

export default MobileBottomNav;
