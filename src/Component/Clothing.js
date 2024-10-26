import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../ALLCSS/Clothing.css';

const Clothing = () => {
  return (
    <div className="container">
      <section className="clothing-section">
        <h2>Clothing</h2>

        <div className="card">
          <img src="../Img/w.jpg" alt="Women clothing" />
          <h3>Women</h3>
          <p>Details about clothing item 1.</p>
          <div className="card-icons">
            <Link to="/women">View All</Link>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
        </div>

        <div className="card">
          <img src="../Img/kids.jpg" alt="Kids clothing" />
          <h3>Kids</h3>
          <p>Details about clothing item 2</p>
          <div className="card-icons">
            <Link to="/kids">View All</Link>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
        </div>

        <div className="card">
          <img src="../Img/m.jpg" alt="Men clothing" />
          <h3>Men</h3>
          <p>Details about clothing item 3</p>
          <div className="card-icons">
            <Link to="/men">View All</Link>
            <Link to="/cart">
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

export default Clothing;
