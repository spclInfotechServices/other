import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../C/Women.css';
import women from '../Img/w.jpg';

const Women = () => {
  return (
    <div className="container">
      <section className="clothing-section">
        <h2>Clothing</h2>
        <div className="card">
          <img src={women} alt="Women" className="card-image" />
          <h3>Women</h3>
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
          <img src={women} alt="Women" className="card-image" />
          <h3>Women</h3>
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
          <img src={women} alt="Women" className="card-image" />
          <h3>Women</h3>
          <p>Daily wear</p>
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
  )
}

export default Women
