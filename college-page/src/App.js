import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AdmissionForm from './pages/AdmissionForm';
import Departments from './pages/Departments';
import Enquiry from './pages/Enquiry';
import './App.css';

const App = () => {
  const aboutUsItems = [
    "Vivekanand Education Society's Institute of Technology (VESIT) is committed to providing quality education and fostering innovation in the field of technology.",
    "Our mission is to empower students with knowledge and skills that will help them succeed in their careers.",
    "With a dedicated faculty and state-of-the-art infrastructure, VESIT is a place where students can explore their potential and achieve their dreams."
  ];

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={<Home 
              title="Welcome to Vivekanand Education Society's Institute of Technology" 
              aboutUsItems={aboutUsItems} 
            />} 
          />
          <Route path="/admission" element={<AdmissionForm />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
