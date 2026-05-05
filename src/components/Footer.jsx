import React from 'react';
import { Coffee, MapPin, Mail, Phone, Link2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="brand-logo">
            <Coffee className="brand-icon" size={28} />
            <span>Lumina Roasters</span>
          </div>
          <p className="footer-desc">
            Elevating your morning ritual with ethically sourced, masterfully roasted coffee from around the world.
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><Link2 size={20} /></a>
            <a href="#" className="social-link"><Link2 size={20} /></a>
            <a href="#" className="social-link"><Link2 size={20} /></a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#about">Our Story</a>
          <a href="#menu">Menu</a>
          <a href="#shop">Shop Roasts</a>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <MapPin size={18} className="contact-icon" />
            <span>123 Coffee Lane, Seattle, WA 98101</span>
          </div>
          <div className="contact-item">
            <Phone size={18} className="contact-icon" />
            <span>(555) 123-4567</span>
          </div>
          <div className="contact-item">
            <Mail size={18} className="contact-icon" />
            <span>hello@luminacoffee.com</span>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Awake</h4>
          <p>Subscribe for updates on new roasts and exclusive offers.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Lumina Coffee Roasters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
