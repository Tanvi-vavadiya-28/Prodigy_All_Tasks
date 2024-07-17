import React, { useState } from 'react';
import './LocationInput.css';

const LocationInput = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <form className="location-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default LocationInput;
