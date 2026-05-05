import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container" style={{ paddingBlock: '120px' }}>
      <h2 className="h2 section-title">Get in <span className="span">Touch</span></h2>
      <p style={{ textAlign: 'center', color: 'var(--battleship-gray)', marginBottom: '50px' }}>
        Have questions? We're here to help! Reach out to our pet experts.
      </p>

      <div style={{ display: 'grid', gap: '50px', gridTemplateColumns: '1fr' }}>
        <div className="contact-info" style={{ display: 'grid', gap: '30px' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ padding: '15px', background: 'var(--portland-orange)', color: 'white', borderRadius: '50%' }}><Phone size={24} /></div>
            <div>
              <h3 className="h3">Phone</h3>
              <p>+01 123 456 789</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ padding: '15px', background: 'var(--portland-orange)', color: 'white', borderRadius: '50%' }}><Mail size={24} /></div>
            <div>
              <h3 className="h3">Email</h3>
              <p>support@kitter.com</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ padding: '15px', background: 'var(--portland-orange)', color: 'white', borderRadius: '50%' }}><MapPin size={24} /></div>
            <div>
              <h3 className="h3">Location</h3>
              <p>3085 Neals Lane, Florida, USA</p>
            </div>
          </div>
        </div>

        <form style={{ display: 'grid', gap: '20px', background: '#f9f9f9', padding: '40px', borderRadius: '20px' }}>
          <h3 className="h3">Send a Message</h3>
          <input type="text" placeholder="Your Name" style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
          <input type="email" placeholder="Your Email" style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
          <textarea placeholder="Your Message" rows="5" style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }}></textarea>
          <button className="btn" style={{ maxWidth: 'none', paddingBlock: '15px' }}>
            <Send size={20} style={{ marginRight: '10px' }} /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
