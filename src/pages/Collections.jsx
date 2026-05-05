import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const collections = [
  { id: 1, name: 'Summer Collection', img: '/assets/images/offer-banner-1.jpg', items: 12 },
  { id: 2, name: 'Premium Nutrition', img: '/assets/images/offer-banner-2.jpg', items: 8 },
  { id: 3, name: 'New Arrivals', img: '/assets/images/offer-banner-3.jpg', items: 15 },
  { id: 4, name: 'Luxury Accessories', img: '/assets/images/category-4.jpg', items: 10 },
];

const Collections = () => {
  return (
    <div className="container" style={{ paddingBlock: '120px' }}>
      <h2 className="h2 section-title">Our <span className="span">Collections</span></h2>
      <p style={{ textAlign: 'center', color: 'var(--battleship-gray)', marginBottom: '50px', maxWidth: '600px', marginInline: 'auto' }}>
        Discover curated selections for your pets.
      </p>

      <div className="grid-list" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {collections.map((col, i) => (
          <motion.div 
            key={col.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '300px' }}
          >
            <img src={col.img} alt={col.name} className="img-cover" />
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-end', 
              padding: '30px' 
            }}>
              <h3 className="h3" style={{ color: 'white', marginBottom: '5px' }}>{col.name}</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '15px' }}>{col.items} Items</p>
              <Link to="/shop" className="btn" style={{ fontSize: '1.4rem' }}>View Collection</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
