import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Confirmation = () => {
  return (
    <div className="container" style={{ paddingBlock: '150px', textAlign: 'center' }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        style={{ marginBottom: '30px' }}
      >
        <ion-icon name="checkmark-circle" style={{ fontSize: '100px', color: '#4bb543' }}></ion-icon>
      </motion.div>
      
      <motion.h2 
        className="h2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Order Confirmed!
      </motion.h2>
      
      <motion.p 
        style={{ marginBlock: '20px', fontSize: '1.8rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Thank you for your purchase. Your order number is <strong>#KITTER-{Math.floor(Math.random() * 100000)}</strong>.
      </motion.p>
      
      <motion.p 
        style={{ marginBottom: '40px', color: '#666', fontSize: '1.6rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        We've sent a confirmation email with all the details.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Link to="/" className="btn" style={{ marginInline: 'auto' }}>Return Home</Link>
      </motion.div>
    </div>
  );
};

export default Confirmation;
