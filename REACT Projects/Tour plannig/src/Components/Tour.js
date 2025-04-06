import React from 'react';
import './Tours.css';
import Card from './Card'; // Import the Card component from Card.js

function Tour({ tours, removeTour }) {
    return (
        <div className="container">
            <div className="title">
                Plan Your Tour with Deepak
            </div>
            <div className="cards">
                {tours.map((tour) => (
                    <Card key={tour.id} {...tour} removeTour={removeTour} />
                ))}
            </div>
        </div>
    );
}

export default Tour;