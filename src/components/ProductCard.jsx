import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="card-banner img-holder" style={{ '--width': 360, '--height': 360 }}>
        <img
          src={product.image}
          width="360"
          height="360"
          loading="lazy"
          alt={product.name}
          className="img-cover default"
        />
        <img
          src={product.hoverImage || product.image}
          width="360"
          height="360"
          loading="lazy"
          alt={product.name}
          className="img-cover hover"
        />

        <button
          className="card-action-btn"
          aria-label="add to card"
          title="Add To Card"
          onClick={() => addToCart(product)}
        >
          <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>

      <div className="card-content">
        <div className="wrapper">
          <div className={`rating-wrapper ${product.rating === 0 ? 'gray' : ''}`}>
            {[...Array(5)].map((_, i) => (
              <ion-icon key={i} name="star" aria-hidden="true"></ion-icon>
            ))}
          </div>
          <span className="span">({product.reviews})</span>
        </div>

        <h3 className="h3">
          <Link to={`/product/${product.id}`} className="card-title">
            {product.name}
          </Link>
        </h3>

        <data className="card-price" value={product.price}>
          ${product.price.toFixed(2)}
        </data>
      </div>
    </div>
  );
};

export default ProductCard;
