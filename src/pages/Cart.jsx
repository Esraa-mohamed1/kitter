import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ paddingBlock: '150px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <ion-icon name="cart-outline" style={{ fontSize: '80px', color: '#ccc' }}></ion-icon>
        </div>
        <h2 className="h2">Your cart is empty</h2>
        <p style={{ marginBlock: '20px', fontSize: '1.6rem' }}>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="btn" style={{ marginInline: 'auto' }}>Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingBlock: '120px' }}>
      <h2 className="h2 section-title">Your <span className="span">Shopping</span> Cart</h2>
      
      <div className="responsive-grid two-cols">
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <motion.div 
              key={item.id} 
              className="cart-item-mobile"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img src={item.image} alt={item.name} width="100" height="100" style={{ borderRadius: '10px', objectFit: 'cover' }} />
              <div style={{ flex: 1 }}>
                <h3 className="h3" style={{ fontSize: '1.8rem' }}>{item.name}</h3>
                <p className="card-price" style={{ marginBlock: '5px' }}>${item.price.toFixed(2)}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #eee', borderRadius: '50px' }}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '5px 12px' }}><Minus size={14} /></button>
                    <span style={{ padding: '0 5px', fontSize: '1.4rem' }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '5px 12px' }}><Plus size={14} /></button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} style={{ color: '#ff4d4d', display: 'flex', alignItems: 'center' }}>
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div style={{ fontWeight: '700', fontSize: '1.8rem', color: 'var(--eerie-black)' }}>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="cart-summary" style={{ background: '#f9f9f9', padding: '30px', borderRadius: '15px', height: 'max-content' }}>
          <h3 className="h3" style={{ marginBottom: '20px' }}>Order Summary</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '1.6rem' }}>
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '1.6rem' }}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #ddd', fontWeight: '700', fontSize: '2rem' }}>
            <span>Total</span>
            <span style={{ color: 'var(--portland-orange)' }}>${cartTotal.toFixed(2)}</span>
          </div>
          <button 
            className="btn" 
            style={{ width: '100%', maxWidth: 'none', marginTop: '30px', paddingBlock: '15px', fontSize: '1.6rem' }}
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
