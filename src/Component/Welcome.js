import React from 'react';
import '../ALLCSS/Welcome.css';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate (); 

    const handleClick = () => {
        navigate ("/Home");
    }

  return (
    <div className="welcome-container">
      <div className="content">
        <h1 className="welcome-title">Welcome to StylePoint</h1>
        <p className="welcome-text">
          Explore exclusive offers, insider tips, and all the latest trends here with us!
        </p>
        <button className="welcome-button" onClick={handleClick}>Discover More</button>
      </div>
    </div>

  )
}

export default Welcome;
