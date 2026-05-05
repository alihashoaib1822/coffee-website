import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Menu.css';

const Menu = () => {
  const { addToCart } = useCart();

  const menuItems = [
    {
      id: 1,
      name: 'Signature Espresso',
      description: 'A double shot of our finest house blend. Rich crema, bold flavor with notes of dark chocolate and cherry.',
      price: '$3.50',
      image: '/images/espresso_1777970373335.png'
    },
    {
      id: 2,
      name: 'Velvet Latte',
      description: 'Smooth microfoam milk over a double shot of espresso. Creamy, comforting, and visually stunning.',
      price: '$5.00',
      image: '/images/latte_1777970417372.png'
    },
    {
      id: 3,
      name: 'Artisan Pour Over',
      description: 'Single-origin beans brewed meticulously to highlight delicate floral and fruity notes. A pure experience.',
      price: '$6.50',
      image: '/images/pourover_1777970442215.png'
    },
    {
      id: 4,
      name: 'Cold Brew',
      description: 'Steeped for 24 hours. Refreshingly smooth, highly caffeinated, and perfect for warm afternoons.',
      price: '$4.50',
      image: '/images/cold_brew_1777972653731.png'
    },
    {
      id: 5,
      name: 'Iced Matcha Latte',
      description: 'Ceremonial grade matcha blended with oat milk and a touch of vanilla over ice. Vibrant and earthy.',
      price: '$5.50',
      image: '/images/matcha_1777972803337.png'
    },
    {
      id: 6,
      name: 'Classic Flat White',
      description: 'A delicate balance of espresso and velvety steamed milk. The perfect start to your morning.',
      price: '$4.50',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="menu" className="section menu">
      <div className="container">
        <div className="section-header">
          <h2>Cafe Menu</h2>
          <p>Crafted with precision, served with passion.</p>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={`menu-${item.id}`} className="menu-card">
              <div className="menu-image-container">
                <img src={item.image} alt={item.name} className="menu-image" />
                <div className="menu-price">{item.price}</div>
              </div>
              <div className="menu-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button 
                  className="btn btn-primary add-to-cart-btn" 
                  onClick={() => addToCart(item)}
                >
                  <Plus size={18} style={{ marginRight: '8px' }} />
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
