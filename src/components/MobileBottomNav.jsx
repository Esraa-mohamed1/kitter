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
      <NavLink to="/cart" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} style={{ position: 'relative' }}>
        <div className="cart-mobile-icon-wrapper" style={{ 
          backgroundColor: 'var(--portland-orange)', 
          color: 'white', 
          borderRadius: '50%', 
          width: '50px', 
          height: '50px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginTop: '-25px',
          boxShadow: '0 5px 15px rgba(230, 81, 0, 0.3)',
          border: '5px solid white'
        }}>
          <ion-icon name="cart-outline" style={{ fontSize: '24px' }}></ion-icon>
          {cartCount > 0 && (
            <span className="btn-badge" style={{ top: '-5px', right: '-5px', border: '2px solid var(--portland-orange)' }}>
              {cartCount}
            </span>
          )}
        </div>
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
