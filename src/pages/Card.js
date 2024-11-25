import React from 'react';

const Card = ({ description, imageUrl, buttonText, isFeatured }) => {
    const title = isFeatured ? "Featured Card Title" : "Menus";

    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>  {/* Conditional Title */}
            <p>{description}</p>
            <button>{buttonText}</button>
        </div>
    );
};

export default Card;

