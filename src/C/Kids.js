import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import kids from '../Img/kids.jpg';

const Kids = () => {
  return (
    <div className="container">
      <section className="clothing-section">
        <h2>Kids Clothing</h2>

        <div className="card">
          <img src={kids} alt="Kids" className="card-image" />
          <h3>Kids</h3>
          <p>Traditional</p>
          <div className="card-icons">
            <Link to="Clothing">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
        </div>

        <div className="card">
          <img src={kids} alt="Kids" className="card-image" />
          <h3>Kids</h3>
          <p>Party Wear</p>
          <div className="card-icons">
            <Link to="Clothing">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
        </div>

        <div className="card">
          <img src={kids} alt="Kids" className="card-image" />
          <h3>Kids</h3>
          <p>Daily Wear</p>
          <div className="card-icons">
            <Link to="Clothing">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Kids;
