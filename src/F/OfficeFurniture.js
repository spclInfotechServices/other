import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../F/OfficeFurniture.css';
import office from '../Img/office.jpg';

const OfficeFurniture = () => {
  return (
    <div className="container">
    <section className="furniture-section">
        <h2>Furniture</h2>
        <div className="card">
          <img src={office} alt="Office" className="card-image" />
          <h3>Sofas</h3>
          <p>Details about Sofas</p>
          <div className="card-icons">
            <Link to="Furniture">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
        </div>

        <div className="card">
          <img src={office} alt="Office" className="card-image" />
          <h3>Sofas</h3>
          <p>Details about Sofas</p>
          <div className="card-icons">
            <Link to="Furniture">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
        </div>

        <div className="card">
          <img src={office} alt="Office" className="card-image" />
          <h3>Sofas</h3>
          <p>Details about Sofas</p>
          <div className="card-icons">
            <Link to="Furniture">
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

export default OfficeFurniture
