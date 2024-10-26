import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../ALLCSS/Nav.css';

const DropDown = ({ label, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        {label} <i className={icon}></i>
      </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

const Navbar = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false); 

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <span className="navbar-title">StylePoint</span>
        <div className="menu-toggle" onClick={toggleSidenav}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="navbar-links">
        <NavLink className="Wel" to="Welcome"></NavLink>
          <NavLink className="Link" to="Home">Home</NavLink>
          <DropDown className="drop-down" label="Cloths" icon="fa-solid fa-caret-down">
            <NavLink className="dropdown-item" to="Women">Women</NavLink>
            <NavLink className="dropdown-item" to="Kids">Kids</NavLink>
            <NavLink className="dropdown-item" to="Men">Men</NavLink>
          </DropDown>
          <DropDown className="drop-down" label="Furniture" icon="fa-solid fa-caret-down">
            <NavLink className="dropdown-item" to="Tables">Tables</NavLink>
            <NavLink className="dropdown-item" to="Sofas">Sofas</NavLink>
            <NavLink className="dropdown-item" to="Bed">Beds</NavLink>
            <NavLink className="dropdown-item" to="OfficeFurniture">Office Furniture</NavLink>
          </DropDown>
          <NavLink className="Link" to="Review">Reviews</NavLink>
          <NavLink className="Link" to="Signin">Sign In</NavLink>
          <NavLink className="Link" to="Login">Log In</NavLink>
        </div>
      </div>

      <div className={`sidenav ${isSidenavOpen ? 'active' : ''}`}>
        <span className="closebtn" onClick={toggleSidenav}>&times;</span>
        <ul className="nav">
          <li>
            <NavLink className="Link" to="Home" onClick={toggleSidenav}>Home</NavLink>
          </li>
          <li>
            <DropDown label="Cloths" icon="fa-solid fa-caret-down">
              <NavLink className="dropdown-item" to="Women" onClick={toggleSidenav}>Women</NavLink>
              <NavLink className="dropdown-item" to="Kids" onClick={toggleSidenav}>Kids</NavLink>
              <NavLink className="dropdown-item" to="Men" onClick={toggleSidenav}>Men</NavLink>
            </DropDown>
          </li>
          <li>
            <DropDown label="Furniture" icon="fa-solid fa-caret-down">
              <NavLink className="dropdown-item" to="Tables" onClick={toggleSidenav}>Tables</NavLink>
              <NavLink className="dropdown-item" to="Sofas" onClick={toggleSidenav}>Sofas</NavLink>
              <NavLink className="dropdown-item" to="Beds" onClick={toggleSidenav}>Beds</NavLink>
              <NavLink className="dropdown-item" to="OfficeFurniture" onClick={toggleSidenav}>Office Furniture</NavLink>
            </DropDown>
          </li>
          <li>
            <NavLink className="Link" to="Review" onClick={toggleSidenav}>Reviews</NavLink>
          </li>
          <li>
            <NavLink className="Link" to="Signin" onClick={toggleSidenav}>Sign In</NavLink>
          </li>
          <li>
            <NavLink className="Link" to="Login" onClick={toggleSidenav}>Log In</NavLink>
          </li>
        </ul>
      </div>
    </div>
    
  );
};

export default Navbar;
