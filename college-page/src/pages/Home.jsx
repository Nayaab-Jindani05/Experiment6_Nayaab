// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = ({ title, aboutUsItems }) => {
  return (
    <div className="home-container">
      <div className="home">
        <h2>{title}</h2>
      </div>
      
      <section className="about-us">
        <h3>About Us</h3>
        <div className="about-us-container">
          {aboutUsItems.map((item, index) => (
            <div key={index} className="about-us-item">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
