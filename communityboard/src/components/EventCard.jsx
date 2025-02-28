import React from 'react';
import '../index.css';

const EventCard = (props) => {
    return (
        <div className="event-card">
            <img src={props.imageUrl} alt={props.name} className="event-image" />
            <h2>{props.name}</h2>
            <p>{props.date}</p>
            <a href={props.link} className="event-link" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
    );
};

export default EventCard;