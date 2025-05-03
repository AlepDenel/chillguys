import React, { useState, useEffect } from 'react';

const baseURL = 'http://localhost:8000';

const AirQualityPolling = () => {
    const [airQualityList, setAirQualityList] = useState([]);

    useEffect(() => {
        const fetchAQI = async () => {
            try {
                const response = await fetch(`${baseURL}/api/latest-aqi/`);
                const data = await response.json();
                console.log('Fetched AQI:', data);
                setAirQualityList(data);
            } catch (error) {
                console.error('Error fetching AQI:', error);
            }
        };

        fetchAQI();
        const interval = setInterval(fetchAQI, 10000); // every 10 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="databox">
            <h2>Air Quality Index</h2>
            {airQualityList.length > 0 ? (
                airQualityList.map((aqi, index) => (
                    <div key={index} style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#eef', borderRadius: '8px' }}>
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