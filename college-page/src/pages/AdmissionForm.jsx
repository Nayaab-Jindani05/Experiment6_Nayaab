// src/pages/AdmissionForm.js
import React, { useState } from 'react';
import './AdmissionForm.css';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted for ${formData.name}`);
    setFormData({ name: '', email: '' }); // Reset form
  };

  return (
    <div className="admission-form">
      <h2>Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
  <input 
          type="number" 
          name="phone" 
          placeholder="Phone number" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />




<input 
          type="date" 
          name="bday" 
          placeholder="Birthdate" 
          value={formData.bday} 
          onChange={handleChange} 
          required 
        />



<input 
          type="text" 
          name="dept" 
          placeholder="Department" 
          value={formData.dept} 
          onChange={handleChange} 
          required 
        />


<input 
          type="number" 
          name="marks" 
          placeholder="Marks scored in 10th boards" 
          value={formData.marks} 
          onChange={handleChange} 
          required 
        />


<input 
          type="number" 
          name="marks1" 
          placeholder="Marks scored in 12th boards" 
          value={formData.marks1} 
          onChange={handleChange} 
          required 
        />





        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdmissionForm;
