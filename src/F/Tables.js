import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../F/Tables.css';
import tables from '../Img/tables.jpeg';

const Tables = () => {
  return (
    <div className="container">
      <section className="furniture-section">
        <h2>Furniture</h2>
        
        <div className="card">
          <img src={tables} alt="Tables" className="card-image" />
          <h3>Tables</h3>
          <p>Details about Tables</p>
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
          <img src={tables} alt="Tables" className="card-image" />
          <h3>Tables</h3>
          <p>Details about Tables</p>
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
          <img src={tables} alt="Tables" className="card-image" />
          <h3>Tables</h3>
          <p>Details about Tables</p>
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

export default Tables;
