import React from 'react';
import '../ALLCSS/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: anuhskapowar173@gmail.com</p>
          <p>Phone: 91-9075877037</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#facebook" className="icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#twitter" className="icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#instagram" className="icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#linkedin" className="icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} StylePoint . All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
