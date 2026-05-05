import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" style={{ backgroundImage: "url('/images/hero_bg_1777970357602.png')" }}></div>
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <div className="hero-text-box glass-dark animate-fade-in">
          <h1 className="hero-title">Experience the Art of Coffee</h1>
          <p className="hero-subtitle">Meticulously sourced, perfectly roasted, and crafted for the true connoisseur. Discover your new morning ritual.</p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Shop Roasts <ArrowRight size={20} className="ml-2" style={{marginLeft: '8px'}} />
            </button>
            <button className="btn btn-outline">Explore Menu</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
