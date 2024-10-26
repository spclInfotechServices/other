import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../ALLCSS/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Component/Footer';


import womenClothing from '../Img/w.jpg';
import kidsClothing from '../Img/kids.jpg';
import menClothing from '../Img/m.jpg';
import officeFurniture from '../Img/office.jpg';
import sofas from '../Img/s.jpeg';
import tables from '../Img/tables.jpeg';
import showimage1 from '../Img/showimage1.jpeg';
import showimage2 from '../Img/showimage2.jpeg';
import showimage3 from '../Img/showimage3.jpeg';
import showimage4 from '../Img/showimage4.jpeg';

const Home = () => {
  // State for the slideshow
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [showimage1, showimage2, showimage3, showimage4];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
    <div className="container">
      {/* Slideshow Section */}
      <div className="slideshow">
        <button className="prev" onClick={prevSlide}>❮</button>
        <div className="mySlides">
          <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} style={{ width: '100%' }} />
        </div>
        <button className="next" onClick={nextSlide}>❯</button>
      </div>

      <h1>Welcome to Our Business</h1>
      <p>We offer premium products in photography, clothing, and furniture. Explore our collections below:</p>

      {/* Clothing Section */}
      <section className="clothing-section">
        <h2>Clothing</h2>
        <div className="card-grid">
          <div className="card">
            <img src={womenClothing} alt="Women Clothing" />
            <h3>Women</h3>
            <p>Details about Women cloths</p>
            <div className="card-icons">
              <Link to="Women">View All</Link>
              <Link to="Clothing">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={kidsClothing} alt="Kids Clothing" />
            <h3>Kids</h3>
            <p>Details about Kids cloths</p>
            <div className="card-icons">
              <Link to="Kids">View All</Link>
              <Link to="Clothing">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={menClothing} alt="Men Clothing" />
            <h3>Men</h3>
            <p>Details about Men cloths</p>
            <div className="card-icons">
              <Link to="Men">View All</Link>
              <Link to="Clothing">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Furniture Section */}
      <section className="furniture-section">
        <h2>Furniture</h2>
        <div className="card-grid">
          <div className="card">
            <img src={tables} alt="Tables" />
            <h3>Tables</h3>
            <p>View All Tables</p>
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

          <div className="card">
            <img src={sofas} alt="Sofas" />
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

          <div className="card">
            <img src={officeFurniture} alt="Office Furniture" />
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
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <h2>Reviews</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Anushka Powar</h3>
            <p>Positive reviews often highlight fast, reliable delivery.</p>
          </div>

          <div className="card">
            <h3>Yashashri Gite</h3>
            <p>People like the app’s easy navigation, filters, and smooth checkout process.</p>
          </div>

          <div className="card">
            <h3>Shraddha Chande</h3>
            <p>Good experiences with customer support, such as quick refunds, easy replacements, and helpful resolution of issues.</p>
          </div>
        </div>
      </section>
    </div>
      <Footer/>
      </>
  );
};

export default Home;
