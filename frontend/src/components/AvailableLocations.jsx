import React, { useEffect, useState } from 'react';
import './AvailableLocations.css';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const AvailableLocations = ({ type }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const endpoint = type === 'wqi' ? '/api/latest-wqi/' : '/api/latest-aqi/';
        const response = await fetch(`${baseURL}${endpoint}`);
        const data = await response.json();
        const names = data.map(item => type === 'wqi' ? item.station : item.location);
        setLocations(names);
      } catch (err) {
        console.error("Failed to fetch locations:", err);
      }
    };

    fetchLocations();
  }, [type]);

  return (
    <div className="available-locations">
      <h3>Available Locations</h3>
      <div className="location-grid">
        {locations.map((loc, index) => (
          <div className="location-card" key={index}>
            {loc}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableLocations;