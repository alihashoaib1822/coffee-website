import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import './Locations.css';

const Locations = () => {
  return (
    <section id="locations" className="section locations">
      <div className="container">
        <div className="section-header">
          <h2>Visit Our Cafe</h2>
          <p>Experience the aroma of freshly roasted beans in person.</p>
        </div>

        <div className="location-content">
          <div className="location-image-wrapper animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" 
              alt="Lumina Coffee Cafe Interior" 
              className="location-image"
              loading="lazy"
            />
            <div className="glass-panel location-glass-panel">
              <h3>Flagship Roastery</h3>
              <p>Where the magic happens every morning.</p>
            </div>
          </div>

          <div className="location-details animate-fade-in delay-200">
            <div className="info-block">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h4>Address</h4>
                <p>123 Coffee Lane<br/>Seattle, WA 98101</p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon"><Clock size={24} /></div>
              <div>
                <h4>Hours</h4>
                <p>Mon-Fri: 6:30 AM - 7:00 PM<br/>Sat-Sun: 7:30 AM - 8:00 PM</p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon"><Phone size={24} /></div>
              <div>
                <h4>Contact</h4>
                <p>(555) 123-4567<br/>hello@luminacoffee.com</p>
              </div>
            </div>
            
            <button className="btn btn-outline map-btn">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
