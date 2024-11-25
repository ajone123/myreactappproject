import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';  // Import ProductPage
import ContactPage from './pages/ContactPage';  // Import ContactPage
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductPage />} />  {/* Add route for ProductPage */}
          <Route path="/contact" element={<ContactPage />} />  {/* Add route for ContactPage */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
