import React from 'react';
import { useCart } from '../contexts/CartContext';
import './CartPage.css'; // Importing CSS for CartPage
import Navbar from '../components/Navbar'; // Importing Navbar component

const CartPage = () => {
  const { cart } = useCart();

  console.log(cart); // Check if cart data is being passed correctly

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <Navbar />
      <header className="cart-header">
        <img src="/img/Cart-banner.jpg" alt="Cart Banner" className="cart-banner" /> {/* Add banner image */}
        <h1>Your Cart</h1>
        <p>Your selected items will appear here.</p>
      </header>
      <main>
        <section className="cart-items">
          <h3>Items in Your Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="cart-list">
              {cart.map((product, index) => (
                <div key={index} className="cart-item">
                  <img src={product.image} alt={product.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="cart-item-price">${product.price}</p>
                  </div>
                </div>
              ))}
              <p className="cart-total">Total: ${total}</p>
            </div>
          )}
        </section>
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
};

export default CartPage;
