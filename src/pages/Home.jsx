import React from 'react';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Commodo leo sed porta', price: 15, rating: 5, reviews: 1, image: '/assets/images/product-1.jpg', hoverImage: '/assets/images/product-1_0.jpg' },
  { id: 2, name: 'Purus consequat congue sit', price: 45, rating: 4, reviews: 0, image: '/assets/images/product-2.jpg', hoverImage: '/assets/images/product-2_0.jpg' },
  { id: 3, name: 'Morbi vel arcu scelerisque', price: 45, rating: 3, reviews: 0, image: '/assets/images/product-3.jpg', hoverImage: '/assets/images/product-3_0.jpg' },
  { id: 4, name: 'Morbi vel arcu scelerisque', price: 49, rating: 4, reviews: 0, image: '/assets/images/product-4.jpg', hoverImage: '/assets/images/product-4_0.jpg' },
  { id: 5, name: 'Morbi vel arcu scelerisque', price: 85, rating: 5, reviews: 0, image: '/assets/images/product-5.jpg', hoverImage: '/assets/images/product-5_0.jpg' },
  { id: 6, name: 'Nam justo libero porta ege', price: 85, rating: 4, reviews: 0, image: '/assets/images/product-6.jpg', hoverImage: '/assets/images/product-6_0.jpg' },
  { id: 7, name: 'Nam justo libero porta ege', price: 85, rating: 5, reviews: 0, image: '/assets/images/product-7.jpg', hoverImage: '/assets/images/product-7_0.jpg' },
  { id: 8, name: 'Etiam commodo leo sed', price: 55, rating: 4, reviews: 0, image: '/assets/images/product-8.jpg', hoverImage: '/assets/images/product-8_0.jpg' },
];

const Home = () => {
  return (
    <main>
      <article>
        {/* HERO */}
        <section
          className="section hero has-bg-image"
          id="home"
          aria-label="home"
          style={{ backgroundImage: "url('/assets/images/hero-banner.jpg')" }}
        >
          <div className="container">
            <h1 className="h1 hero-title">
              <span className="span">High Quality</span> Pet Food
            </h1>
            <p className="hero-text">Sale up to 40% off today</p>
            <Link to="/shop" className="btn">Shop Now</Link>
          </div>
        </section>

        {/* CATEGORY */}
        <section className="section category" aria-label="category">
          <div className="container">
            <h2 className="h2 section-title">
              <span className="span">Top</span> categories
            </h2>

            <ul className="has-scrollbar">
              {[
                { name: 'Cat Food', img: '/assets/images/category-1.jpg', filter: 'Cat' },
                { name: 'Cat Toys', img: '/assets/images/category-2.jpg', filter: 'Cat' },
                { name: 'Dog Food', img: '/assets/images/category-3.jpg', filter: 'Dog' },
                { name: 'Dog Toys', img: '/assets/images/category-4.jpg', filter: 'Dog' },
                { name: 'Dog Sumpplements', img: '/assets/images/category-5.jpg', filter: 'Dog' },
              ].map((cat, i) => (
                <li key={i} className="scrollbar-item">
                  <Link to={`/shop?category=${cat.filter}`} className="category-card">
                    <figure className="card-banner img-holder" style={{ '--width': 330, '--height': 300 }}>
                      <img src={cat.img} width="330" height="300" loading="lazy" alt={cat.name} className="img-cover" />
                    </figure>
                    <h3 className="h3">
                      <span className="card-title">{cat.name}</span>
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OFFERS */}
        <section className="section offer" aria-label="offer">
          <div className="container">
            <ul className="grid-list">
              {[
                { title: 'Hot Summer Deals', sub: 'Selected Items. Online Only.', img: '/assets/images/offer-banner-1.jpg', span: 'Deals' },
                { title: 'Spoil your true love', sub: 'Treats & Grooming', img: '/assets/images/offer-banner-2.jpg', span: 'love' },
                { title: 'New in this year', sub: 'Our Brand You Will Love', img: '/assets/images/offer-banner-3.jpg', span: 'year' },
              ].map((offer, i) => (
                <li key={i}>
                  <div
                    className="offer-card has-bg-image img-holder"
                    style={{ backgroundImage: `url('${offer.img}')`, '--width': 540, '--height': 374 }}
                  >
                    <p className="card-subtitle">{offer.sub}</p>
                    <h3 className="h3 card-title">
                      {offer.title.replace(offer.span, '')} <span className="span">{offer.span}</span>
                    </h3>
                    <Link to="/shop" className="btn">Read More</Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="section product" id="shop" aria-label="product">
          <div className="container">
            <h2 className="h2 section-title">
              <span className="span">Best</span> Seller
            </h2>

            <ul className="grid-list">
              {products.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICE */}
        <section className="section service" aria-label="service">
          <div className="container">
            <img src="/assets/images/service-image.png" width="122" height="136" loading="lazy" alt="" className="img" />
            <h2 className="h2 section-title">
              <span className="span">What your pet needs,</span> when they need it.
            </h2>

            <ul className="grid-list">
              {[
                { title: 'Free Same-Day Delivery', text: 'Order by 2pm local time to get free delivery on orders $35+ today.', icon: '/assets/images/service-icon-1.png' },
                { title: '30 Day Return', text: '35% off your first order plus 5% off all future orders.', icon: '/assets/images/service-icon-2.png' },
                { title: 'Security payment', text: '25% off your online order of $50+. Available at most locations.', icon: '/assets/images/service-icon-3.png' },
                { title: '24/7 Support', text: 'Shop online to get orders over $35 shipped fast and free.', icon: '/assets/images/service-icon-4.png' },
              ].map((service, i) => (
                <li key={i}>
                  <div className="service-card">
                    <figure className="card-icon">
                      <img src={service.icon} width="70" height="70" loading="lazy" alt="service icon" />
                    </figure>
                    <h3 className="h3 card-title">{service.title}</h3>
                    <p className="card-text">{service.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="cta has-bg-image" style={{ backgroundImage: "url('/assets/images/cta-bg.jpg')" }} aria-label="cta">
          <div className="container">
            <figure className="cta-banner">
              <img src="/assets/images/cta-banner.png" width="900" height="660" loading="lazy" alt="cat" className="w-100" />
            </figure>
            <div className="cta-content">
              <img src="/assets/images/cta-icon.png" width="120" height="35" loading="lazy" alt="taste guarantee" className="img" />
              <h2 className="h2 section-title">Taste it, love it or we’ll replace it… Guaranteed!</h2>
              <p className="section-text">
                At Petio, we believe your dog and cat will love their food so much that if they don’t … we’ll help you find a replacement. That’s our taste guarantee.
              </p>
              <Link to="/shop" className="btn">Find out more</Link>
            </div>
          </div>
        </section>

        {/* BRAND */}
        <section className="section brand" aria-label="brand">
          <div className="container">
            <h2 className="h2 section-title">
              <span className="span">Popular</span> Brands
            </h2>
            <ul className="has-scrollbar">
              {[1, 2, 3, 4, 5].map((num) => (
                <li key={num} className="scrollbar-item">
                  <div className="brand-card img-holder" style={{ '--width': 150, '--height': 150 }}>
                    <img src={`/assets/images/brand-${num}.jpg`} width="150" height="150" loading="lazy" alt="brand logo" className="img-cover" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Home;
