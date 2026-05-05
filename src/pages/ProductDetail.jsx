import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Commodo leo sed porta', price: 15, rating: 5, reviews: 1, image: '/assets/images/product-1.jpg', hoverImage: '/assets/images/product-1_0.jpg', description: 'High-quality pet food designed for all breeds. Rich in proteins and essential vitamins to keep your pet healthy and energetic.' },
  { id: 2, name: 'Purus consequat congue sit', price: 45, rating: 4, reviews: 0, image: '/assets/images/product-2.jpg', hoverImage: '/assets/images/product-2_0.jpg', description: 'Premium selection for your furry friend. Made with natural ingredients and no artificial preservatives.' },
  { id: 3, name: 'Morbi vel arcu scelerisque', price: 45, rating: 3, reviews: 0, image: '/assets/images/product-3.jpg', hoverImage: '/assets/images/product-3_0.jpg', description: 'Balanced nutrition for active pets. Supports strong muscles and a shiny coat.' },
  { id: 4, name: 'Nam justo libero porta ege', price: 85, rating: 5, reviews: 0, image: '/assets/images/product-4.jpg', hoverImage: '/assets/images/product-4_0.jpg', description: 'The ultimate treat for your pet. Delicious and healthy, perfect for training or daily rewards.' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === parseInt(id)) || products[0];

  return (
    <div className="container product-detail-container">
      <Link to="/shop" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '30px', color: 'var(--battleship-gray)', fontSize: '1.4rem' }}>
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Shop
      </Link>

      <div style={{ display: 'grid', gap: '40px', gridTemplateColumns: window.innerWidth > 992 ? '1fr 1fr' : '1fr' }}>
        <div className="product-images">
          <motion.div 
            className="main-image img-holder" 
            style={{ '--width': 600, '--height': 600, borderRadius: '15px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img src={product.image} alt={product.name} className="img-cover" />
          </motion.div>
        </div>

        <div className="product-info">
          <h2 className="h2" style={{ marginBottom: '10px' }}>{product.name}</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div className="rating-wrapper" style={{ color: 'var(--amber)', display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <ion-icon key={i} name="star" style={{ fontSize: '1.8rem' }}></ion-icon>
              ))}
            </div>
            <span style={{ color: 'var(--battleship-gray)', fontSize: '1.4rem' }}>({product.reviews} customer review)</span>
          </div>

          <p className="card-price" style={{ fontSize: '3.2rem', marginBottom: '20px' }}>
            ${product.price.toFixed(2)}
          </p>

          <p style={{ color: 'var(--sonic-silver)', fontSize: '1.6rem', marginBottom: '30px', lineHeight: '1.6' }}>
            {product.description}
          </p>

          <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--platinum)', borderRadius: '50px', padding: '5px 15px' }}>
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{ padding: '10px' }}>-</button>
              <span style={{ width: '40px', textAlign: 'center', fontSize: '1.8rem' }}>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} style={{ padding: '10px' }}>+</button>
            </div>

            <button 
              className="btn" 
              style={{ flex: 1, minWidth: '200px', maxWidth: 'none', paddingBlock: '15px' }}
              onClick={() => addToCart({ ...product, quantity })}
            >
              Add to Cart
            </button>
          </div>

          <div style={{ display: 'flex', gap: '20px', borderTop: '1px solid var(--platinum)', paddingTop: '20px', color: 'var(--battleship-gray)', fontSize: '1.4rem' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <ion-icon name="heart-outline"></ion-icon> Wishlist
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <ion-icon name="share-social-outline"></ion-icon> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
