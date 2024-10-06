// src/pages/Departments.js
import React from 'react';
import './Departments.css';

const Departments = () => {
  const departments = ['Information Technology', 'Computer Engineering', 'EXTC', 'AIDS','Instrumentation','Electronics and computer science','Civil','Automobile','AI/ML'];

  return (
    <div className="departments">
      <h2>Departments</h2>
      <ul>
        {departments.map((dept, index) => (
          <li key={index}>{dept}</li>
        ))}
      </ul>
    </div>
  );
};

export default Departments;
