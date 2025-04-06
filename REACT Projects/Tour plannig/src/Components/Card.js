import React, { useState } from 'react';
import './Card.css';

const Card = ({ id, name, price, info, image, removeTour }) => {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}...`;

    return (
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{name}</h2>
                <h3 className="card-price"> ₹ {price}</h3>
                <p className="card-description">
                    {description}
                    <span
                        className="readmore"
                        onClick={() => setReadmore(!readmore)}
                    >
                        {readmore ? ' Show less' : ' Read more'}
                    </span>
                </p>
                <button className="btn-red" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
            </div>
        </div>
    );
};

export default Card;