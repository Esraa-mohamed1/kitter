import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Commodo leo sed porta', price: 15, rating: 5, reviews: 1, image: '/assets/images/product-1.jpg', hoverImage: '/assets/images/product-1_0.jpg', category: 'Cat' },
  { id: 2, name: 'Purus consequat congue sit', price: 45, rating: 4, reviews: 0, image: '/assets/images/product-2.jpg', hoverImage: '/assets/images/product-2_0.jpg', category: 'Cat' },
  { id: 3, name: 'Morbi vel arcu scelerisque', price: 45, rating: 3, reviews: 0, image: '/assets/images/product-3.jpg', hoverImage: '/assets/images/product-3_0.jpg', category: 'Dog' },
  { id: 4, name: 'Nam justo libero porta ege', price: 85, rating: 5, reviews: 0, image: '/assets/images/product-4.jpg', hoverImage: '/assets/images/product-4_0.jpg', category: 'Dog' },
  { id: 5, name: 'Etiam commodo leo sed', price: 55, rating: 4, reviews: 2, image: '/assets/images/product-5.jpg', hoverImage: '/assets/images/product-5_0.jpg', category: 'Dog' },
  { id: 6, name: 'Nam justo libero porta ege', price: 85, rating: 5, reviews: 0, image: '/assets/images/product-6.jpg', hoverImage: '/assets/images/product-6_0.jpg', category: 'Cat' },
  { id: 7, name: 'Nam justo libero porta ege', price: 85, rating: 5, reviews: 0, image: '/assets/images/product-7.jpg', hoverImage: '/assets/images/product-7_0.jpg', category: 'Dog' },
  { id: 8, name: 'Etiam commodo leo sed', price: 55, rating: 4, reviews: 2, image: '/assets/images/product-8.jpg', hoverImage: '/assets/images/product-8_0.jpg', category: 'Cat' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [filter, setFilter] = useState(initialCategory);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilter(category);
    } else {
      setFilter('All');
    }
  }, [searchParams]);

  const handleFilterChange = (cat) => {
    setFilter(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredProducts = products.filter(p => {
    const matchesCategory = filter === 'All' || p.category === filter;
    const searchQuery = searchParams.get('search')?.toLowerCase() || '';
    const matchesSearch = p.name.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container" style={{ paddingBlock: '120px' }}>
      <header className="shop-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h2 className="h2 section-title">Shop Our <span className="span">Products</span></h2>
        <p style={{ color: 'var(--battleship-gray)', maxWidth: '600px', marginInline: 'auto' }}>
          Explore our wide range of premium pet food and accessories. Quality guaranteed for your beloved companions.
        </p>
      </header>

      <div className="shop-controls" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          {['All', 'Cat', 'Dog'].map(cat => (
            <button 
              key={cat}
              onClick={() => handleFilterChange(cat)}
              style={{ 
                padding: '8px 20px', 
                borderRadius: '50px', 
                border: '1px solid var(--platinum)',
                backgroundColor: filter === cat ? 'var(--portland-orange)' : 'white',
                color: filter === cat ? 'white' : 'black',
                transition: 'all 0.3s',
                fontSize: '1.4rem'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--battleship-gray)' }}>
          <Filter size={18} />
          <span>Showing {filteredProducts.length} results</span>
        </div>
      </div>

      <motion.ul 
        className="grid-list"
        layout
      >
        {filteredProducts.map((product) => (
          <motion.li 
            key={product.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductCard product={product} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Shop;
