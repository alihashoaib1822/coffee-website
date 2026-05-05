import React from 'react';
import { Leaf, Award, Clock } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Leaf size={40} />,
      title: "Ethically Sourced",
      description: "We partner directly with farmers globally to ensure fair trade and sustainable practices in every bean."
    },
    {
      icon: <Award size={40} />,
      title: "Master Roasted",
      description: "Roasted in small batches by our certified master roasters to bring out the unique profile of each origin."
    },
    {
      icon: <Clock size={40} />,
      title: "Always Fresh",
      description: "Shipped within 48 hours of roasting so you experience the peak flavor and aroma of your coffee."
    }
  ];

  return (
    <section id="about" className="section features">
      <div className="container">
        <div className="section-header">
          <h2>The Lumina Difference</h2>
          <p>Elevating your coffee experience from farm to cup.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card animate-fade-in delay-100">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
