import React, { useState, useEffect } from 'react';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const AirQualityPolling = () => {
  const [airQualityList, setAirQualityList] = useState([]);

  useEffect(() => {
    const fetchAQI = async () => {
      try {
        const response = await fetch(`${baseURL}/api/latest-aqi/?t=${new Date().getTime()}`);
        const data = await response.json();
        console.log('Fetched AQI:', data);

        // Only update state if data is different
        setAirQualityList(prev => {
          const newData = JSON.stringify(data);
          const prevData = JSON.stringify(prev);
          return newData !== prevData ? data : prev;
        });
      } catch (error) {
        console.error('Error fetching AQI:', error);
      }
    };

    fetchAQI();
    const interval = setInterval(fetchAQI, 15000); // Increased to every 15 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-box">
      <h2>Air Quality Index</h2>
      {airQualityList.length > 0 ? (
        airQualityList.map((aqi, index) => (
          <div
            key={`${aqi.location}-${index}`}
            className={`databox ${aqi.status.toLowerCase().replace(/\s/g, '-')}`}
          >
            <p><strong>Location:</strong> {aqi.location}</p>
            <p><strong>AQI:</strong> {aqi.aqi}</p>
            <p><strong>Status:</strong> {aqi.status}</p>
            <p><strong>Temperature:</strong> {aqi.temperature}°C</p>
            <p><strong>Humidity:</strong> {aqi.humidity}%</p>
            <p><strong>Pressure:</strong> {aqi.pressure} hPa</p>
            <p><strong>Time:</strong> {aqi.recorded_at}</p>
          </div>
        ))
      ) : (
        <p>Waiting for air quality data...</p>
      )}
    </div>
  );
};

export default AirQualityPolling;
