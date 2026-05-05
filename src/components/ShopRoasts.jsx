import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ShopRoasts.css';

const ShopRoasts = () => {
  const { addToCart } = useCart();

  const roastItems = [
    {
      id: 101,
      name: 'Ethiopia Yirgacheffe',
      description: 'Light Roast • Floral, Jasmine, Bergamot. Sourced from the birthplace of coffee.',
      price: '$18.00',
      image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 102,
      name: 'Colombia Supremo',
      description: 'Medium Roast • Caramel, Cocoa, Orange. A perfectly balanced, everyday drinking coffee.',
      price: '$16.50',
      image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 103,
      name: 'Sumatra Mandheling',
      description: 'Dark Roast • Earthy, Dark Chocolate, Spices. Full-bodied with a smooth, lingering finish.',
      price: '$19.00',
      image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="shop" className="section shop">
      <div className="container">
        <div className="section-header">
          <h2>Shop Premium Roasts</h2>
          <p>Bring the Lumina experience home. Whole beans roasted fresh to order.</p>
        </div>

        <div className="shop-grid">
          {roastItems.map((item) => (
            <div key={`roast-${item.id}`} className="shop-card animate-fade-in">
              <div className="shop-image-container">
                <img src={item.image} alt={`Bag of ${item.name} coffee beans`} className="shop-image" loading="lazy" />
                <div className="shop-badge">12 oz</div>
              </div>
              <div className="shop-content">
                <h3>{item.name}</h3>
                <p className="shop-desc">{item.description}</p>
                <div className="shop-footer">
                  <span className="shop-price">{item.price}</span>
                  <button 
                    className="btn btn-primary shop-add-btn"
                    onClick={() => addToCart(item)}
                  >
                    <ShoppingBag size={18} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopRoasts;
