import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: "url('/assets/images/footer-bg.jpg')" }}>
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">Kitter</a>
            <p className="footer-text">
              If you have any question, please contact us at <a href="mailto:support@kitter.com" className="link">support@kitter.com</a>
            </p>
            <ul className="contact-list">
              <li className="contact-item">
                <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                <address className="address">3085 Neals Lane, Florida</address>
              </li>
              <li className="contact-item">
                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                <a href="tel:+011234567890" className="contact-link">+01 123 456 789</a>
              </li>
            </ul>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-list">
            <p className="footer-list-title">Corporate</p>
            <ul>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-list">
            <p className="footer-list-title">Information</p>
            <ul>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Refund Policy</a></li>
              <li><a href="#" className="footer-link">Shipping Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-list">
            <p className="footer-list-title">Services</p>
            <ul>
              <li><a href="#" className="footer-link">Grooming</a></li>
              <li><a href="#" className="footer-link">Positive Dog Training</a></li>
              <li><a href="#" className="footer-link">Veterinary Service</a></li>
              <li><a href="#" className="footer-link">Pet Daycare</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 <a href="#" className="copyright-link">codewithsadee</a>. All Rights Reserved
          </p>
          <img src="/assets/images/payment_methods.png" width="340" height="40" loading="lazy" alt="Payment methods" className="img" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
