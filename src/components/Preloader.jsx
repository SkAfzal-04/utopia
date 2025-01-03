import React from 'react';
import '../styles/Preloader.css'; // Add custom styles here if needed

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={require('../assets/loader.gif')} alt="Loading..." />
    </div>
  );
};

export default Preloader;