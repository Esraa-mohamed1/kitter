import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    card: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      clearCart();
      navigate('/confirmation');
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={{ paddingBlock: '120px' }}>
      <h2 className="h2 section-title">Check<span className="span">out</span></h2>
      
      <div className="responsive-grid two-cols">
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '30px' }}>
          <div>
            <h3 className="h3" style={{ marginBottom: '20px' }}>Shipping Information</h3>
            <div style={{ display: 'grid', gap: '15px' }}>
              <input 
                type="text" 
                name="name" 
                placeholder="Full Name" 
                required 
                style={{ padding: '15px', borderRadius: '10px', border: '1px solid var(--platinum)', fontSize: '1.6rem' }}
                onChange={handleChange}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                required 
                style={{ padding: '15px', borderRadius: '10px', border: '1px solid var(--platinum)', fontSize: '1.6rem' }}
                onChange={handleChange}
              />
              <input 
                type="text" 
                name="address" 
                placeholder="Shipping Address" 
                required 
                style={{ padding: '15px', borderRadius: '10px', border: '1px solid var(--platinum)', fontSize: '1.6rem' }}
                onChange={handleChange}
              />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <input 
                  type="text" 
                  name="city" 
                  placeholder="City" 
                  required 
                  style={{ padding: '15px', borderRadius: '10px', border: '1px solid var(--platinum)', fontSize: '1.6rem' }}
                  onChange={handleChange}
                />
                <input 
                  type="text" 
                  name="zip" 
                  placeholder="ZIP Code" 
                  required 
                  style={{ padding: '15px', borderRadius: '10px', border: '1px solid var(--platinum)', fontSize: '1.6rem' }}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="h3" style={{ marginBottom: '20px' }}>Payment Details</h3>
            <input 
              type="text" 
              name="card" 
              placeholder="Card Number (XXXX XXXX XXXX XXXX)" 
              required 
              style={{ padding: '15px', borderRadius: '10px', border: '1px solid var(--platinum)', fontSize: '1.6rem', width: '100%' }}
              onChange={handleChange}
            />
          </div>

          <button 
            type="submit" 
            className="btn" 
            style={{ width: '100%', maxWidth: 'none', paddingBlock: '15px', fontSize: '1.8rem', borderRadius: '50px' }}
          >
            Place Order
          </button>
        </form>

        <div className="order-summary" style={{ background: '#f9f9f9', padding: '30px', borderRadius: '15px', height: 'max-content' }}>
          <h3 className="h3" style={{ marginBottom: '20px' }}>Your Order</h3>
          <ul style={{ marginBottom: '20px', display: 'grid', gap: '10px' }}>
            {cartItems.map(item => (
              <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4rem' }}>
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #ddd', fontWeight: '700', fontSize: '2rem' }}>
            <span>Total</span>
            <span style={{ color: 'var(--portland-orange)' }}>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
