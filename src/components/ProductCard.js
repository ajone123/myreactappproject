import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button onClick={() => window.location.href = `/products/${product.id}`}>View Product</button>
        </div>
    );
}

export default ProductCard;
