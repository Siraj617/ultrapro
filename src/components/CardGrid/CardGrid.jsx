// CardGrid.js
import React from 'react';
import PropTypes from 'prop-types';
import './CardGrid.css'; // Adjusted the path for better maintainability

const CardGrid = ({ cards }) => {
  return (
    <div className="container">
      <h4 className="card-title">How It Works</h4>
      <h1 className="card-subtitle">Start Planning and Build the Event</h1>
      <div className="grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div className="card-inner">
              <div className="left">
                <div className="circle">{card.id}</div>
              </div>
              <div className="right">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes for type-checking
CardGrid.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardGrid;
