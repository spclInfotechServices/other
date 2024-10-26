import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../ALLCSS/Furniture.css';

const Furniture = () => {
  return (
    <div className="container">
    <section className="furniture-section">
        <h2>Furniture</h2>
        <div className="card" img="../Img/tables.jpeg">
          <h3>Tables</h3>
          <p>Details about Tables</p>
          <div className="card-icons">
          <Link to="Tables">View All</Link>
            <Link to="Furniture">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
        </div>

        <div className="card" img="../Img/s.jpeg">
          <h3>Sofas</h3>
          <p>Details about Sofas</p>
          <div className="card-icons">
          <Link to="Sofas">View All</Link>
            <Link to="Furniture">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
        </div>

        <div className="card" img="../Img/b.jpeg">
          <h3>Bed</h3>
          <p>Details about Bed</p>
          <div className="card-icons">
          <Link to="Bed">View All</Link>
            <Link to="Furniture">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
        </div>

        <div className="card" img="../Img/office.jpg">
          <h3>Office Furniture</h3>
          <p>Details about Office Furniture</p>
          <div className="card-icons">
          <Link to="OfficeFurniture">View All</Link>
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

export default Furniture
