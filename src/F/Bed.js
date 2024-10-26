import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../F/Bed.css'
import bed from '../Img/b.jpeg';


const Bed = () => {
  return (
    <div className="container">
    <section className="furniture-section">
        <h2>Furniture</h2>
        <div className="card">
          <img src={bed} alt="Bed" className="card-image" />
          <h3>Bed</h3>
          <p>Details about Bed</p>
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
          <img src={bed} alt="Bed" className="card-image" />
          <h3>Bed</h3>
          <p>Details about Bed</p>
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
          <img src={bed} alt="Bed" className="card-image" />
          <h3>Bed</h3>
          <p>Details about Bed</p>
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

export default Bed
