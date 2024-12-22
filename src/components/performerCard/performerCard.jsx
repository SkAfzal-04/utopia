import React from 'react';
import './performerCard.css';

// Accepting props in the function
const PerformerCard = ({ name,date, imageUrl, description}) => {
  return (
    <div className="card">
      <div className="profile-pic">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="bottom">
        <div className="content">
          <span className="name font-orbitron">{name}</span>
          <span className="about-me font-orbitron">{date}</span>
          <span className="about-me font-orbitron">{description}</span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container">
            <svg
              viewBox="0 0 16 15.999"
              height="15.999"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Add your social icons or SVG here */}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformerCard;
