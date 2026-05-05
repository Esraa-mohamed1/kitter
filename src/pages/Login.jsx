import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="container" style={{ paddingBlock: '150px', display: 'flex', justifyContent: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ 
          width: '100%', 
          maxWidth: '450px', 
          background: 'white', 
          padding: '40px 20px', 
          borderRadius: '25px', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid var(--platinum)'
        }}
      >
        <h2 className="h2" style={{ textAlign: 'center', marginBottom: '10px' }}>Welcome Back</h2>
        <p style={{ textAlign: 'center', color: 'var(--battleship-gray)', marginBottom: '30px', fontSize: '1.4rem' }}>Login to your account to continue</p>

        <form onSubmit={handleLogin} style={{ display: 'grid', gap: '20px' }}>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--battleship-gray)' }}>
              <ion-icon name="mail-outline" style={{ fontSize: '20px' }}></ion-icon>
            </span>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              style={{ width: '100%', padding: '15px 15px 15px 45px', borderRadius: '12px', border: '1px solid var(--platinum)', fontSize: '1.6rem' }} 
            />
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--battleship-gray)' }}>
              <ion-icon name="lock-closed-outline" style={{ fontSize: '20px' }}></ion-icon>
            </span>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              style={{ width: '100%', padding: '15px 15px 15px 45px', borderRadius: '12px', border: '1px solid var(--platinum)', fontSize: '1.6rem' }} 
            />
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <a href="#" style={{ color: 'var(--portland-orange)', fontSize: '1.4rem' }}>Forgot Password?</a>
          </div>

          <button className="btn" style={{ maxWidth: 'none', width: '100%', paddingBlock: '15px', borderRadius: '50px', fontSize: '1.8rem' }}>
            Login
          </button>

          <p style={{ textAlign: 'center', marginTop: '20px', color: 'var(--battleship-gray)', fontSize: '1.4rem' }}>
            Don't have an account? <a href="#" style={{ color: 'var(--portland-orange)', fontWeight: '700' }}>Sign Up</a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
