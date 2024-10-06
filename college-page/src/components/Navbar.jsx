import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="/ves-logo.png" alt="VESIT Logo" className="logo-img" />
        <h1 className="logo">VESIT</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admission">Admission Form</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/enquiry">Enquiry</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
