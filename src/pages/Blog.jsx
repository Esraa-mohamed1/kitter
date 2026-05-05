import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: '5 Tips for Choosing the Best Food for Your Dog',
    date: 'May 12, 2026',
    author: 'Admin',
    image: '/assets/images/blog-1.jpg',
    excerpt: 'Finding the right food for your pet can be a challenge. Here are our top 5 tips...'
  },
  {
    id: 2,
    title: 'Why Cat Toys are Essential for Their Development',
    date: 'May 10, 2026',
    author: 'Admin',
    image: '/assets/images/blog-2.jpg',
    excerpt: 'Playing is not just fun for cats, it is essential for their physical and mental health...'
  },
  {
    id: 3,
    title: 'The Benefits of Organic Pet Supplements',
    date: 'May 08, 2026',
    author: 'Admin',
    image: '/assets/images/blog-3.jpg',
    excerpt: 'Organic supplements can provide your pet with the nutrients they might be missing...'
  }
];

const Blog = () => {
  return (
    <div className="container" style={{ paddingBlock: '120px' }}>
      <h2 className="h2 section-title">Latest <span className="span">Blogs</span></h2>
      <p style={{ textAlign: 'center', color: 'var(--battleship-gray)', marginBottom: '50px', maxWidth: '600px', marginInline: 'auto' }}>
        Professional insights into pet care and nutrition.
      </p>

      <div className="blog-grid">
        {blogPosts.map((post, i) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="blog-card"
            style={{ 
              background: 'white', 
              borderRadius: '15px', 
              overflow: 'hidden', 
              border: '1px solid var(--platinum)',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
            }}
          >
            <div className="img-holder" style={{ '--width': 400, '--height': 250 }}>
              <img src={post.image} alt={post.title} className="img-cover" />
            </div>
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '15px', color: 'var(--battleship-gray)', fontSize: '1.2rem', marginBottom: '10px' }}>
                <span>{post.date}</span>
                <span>By {post.author}</span>
              </div>
              <h3 className="h3" style={{ fontSize: '1.8rem', marginBottom: '10px', flex: 1 }}>{post.title}</h3>
              <p style={{ color: 'var(--sonic-silver)', fontSize: '1.4rem', marginBottom: '15px' }}>{post.excerpt}</p>
              <a href="#" style={{ color: 'var(--portland-orange)', fontWeight: '700', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                Read More <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
