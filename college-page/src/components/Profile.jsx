// src/components/Profile.js
import React from 'react';

const Profile = ({ name, major, year }) => {
  return (
    <div>
      <h2>Profile Information</h2>
      <p>Name: {name}</p>
      <p>Major: {major}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default Profile;
