import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import './ProductPage.css';

const products = [
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

function ProductPage() {
    return (
        <div>
            <Navbar />
            <header className="product-header">
                <img src="/img/db-uk-dancehall-cp-sq1-wk52-aw23.webp" alt="Product Header" className="product-header-image" />
                <h1>Our Products</h1>
                <p>Explore our range of Clarks shoes.</p>
            </header>
            <main>
                <section className="product-list">
                    <h3>All Products</h3>
                    <div className="product-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </main>
            <footer>
                <p>All rights reserve</p>
            </footer>
        </div>
    );
}

export default ProductPage;
