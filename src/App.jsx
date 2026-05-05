import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import ShopRoasts from './components/ShopRoasts';
import Locations from './components/Locations';
import Footer from './components/Footer';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <Cart />
        <main>
          <Hero />
          <Features />
          <Menu />
          <ShopRoasts />
          <Locations />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
