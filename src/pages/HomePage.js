import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

const featuredProducts = [
    {
        id: 1,
        name: 'Clarks Desert Boot',
        description: 'Classic suede boot with crepe sole.',
        price: 120,
        image: '/img/desert-boot.jpg'
    },
    {
        id: 2,
        name: 'Clarks Wallabee',
        description: 'Comfortable and stylish moccasin.',
        price: 130,
        image: '/img/wallabee.jpg'
    },
    // Add more products as needed
];

function HomePage() {
    return (
        <div>
            <Navbar />
            <header className="home-header">
                <img src="/img/Clarksponfoot.jpg" alt="Home Banner" className="home-banner" />
                <h1>Welcome to Jamrock Clarks Store</h1>
                <h2>Clarks & Dancehall</h2>
                <p>Somerset, historically in South West England, Somersetshire is a ceremonial county.</p>
                <p>Although our headquarters in Somerset may have been the birthplace of our shoes, our roots extend beyond that.</p>
            </header>
            <main>
                <section className="featured-products">
                    <h3>Featured Products</h3>
                    <p>Check out our latest arrivals and bestsellers.</p>
                    <div className="product-list">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </main>
            <footer>
                <p>All rights reserved. Clarks and the Clarks logo are registered trademarks of C. & J. Clark International Limited. Clarks International Registered Office: 40 High Street, Street, Somerset BA16 0EQ. Company Registration Number: 141015.</p>
            </footer>
        </div>
    );
}

export default HomePage;
