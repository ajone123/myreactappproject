import React from 'react';
import { Link } from 'react-router-dom';  // Use Link for client-side navigation
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <img src="/img/ClarksLogo.jpg" alt="Jamrock Clarks Logo" />
            </Link>
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
