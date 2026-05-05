import React, { useState, useEffect } from 'react';
import { Coffee, Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-dark' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="brand">
          <Coffee className="brand-icon" size={28} />
          <span>Lumina</span>
        </a>

        <div className="nav-links desktop-only">
          <a href="#home">Home</a>
          <a href="#about">Our Story</a>
          <a href="#menu">Menu</a>
          <a href="#shop">Shop Roasts</a>
          <a href="#locations">Locations</a>
        </div>

        <div className="nav-actions">
          <button className="icon-btn cart-toggle-btn" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={24} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          
          <button 
            className="icon-btn mobile-only" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass-dark">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a>
          <a href="#shop" onClick={() => setMobileMenuOpen(false)}>Shop Roasts</a>
          <a href="#locations" onClick={() => setMobileMenuOpen(false)}>Locations</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
