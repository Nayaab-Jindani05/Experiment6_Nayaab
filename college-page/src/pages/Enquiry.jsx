// src/pages/Enquiry.js
import React from 'react';
import './Enquiry.css';

const Enquiry = () => {
  return (
    <div className="enquiry">
      <h2>Contact Us</h2>
      <div className="contact-cards">
        <div className="contact-card">
          <h3>Address</h3>
          <p>Vivekanand Education Society's Institute of Technology</p>
          <p>Hashu Advani Memorial Complex, Collector's Colony</p>
          <p>Chembur, Mumbai, Maharashtra 400074</p>
        </div>
        <div className="contact-card">
          <h3>Phone</h3>
          <p>+91 22 6153 9400</p>
          <p>+91 22 6153 9401</p>
        </div>
        <div className="contact-card">
          <h3>Email</h3>
          <p>vesit.admission@ves.ac.in</p>
          <p>vesit.principal@ves.ac.in</p>
        </div>
      </div>
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4455410321273!2d72.88741931469764!3d19.045221687107322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5f39a7d77d1%3A0x9ebbdeaea9ec24ae!2sVivekanand%20Education%20Society&#39;s%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1620205232635!5m2!1sen!2sin" 
          width="600" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

export default Enquiry;