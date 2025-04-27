import React, { useState, useEffect } from 'react';

const AirQualityWebSocket = () => {
    const [airQualityData, setAirQualityData] = useState(null);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8000/ws/aqi/');
        
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log('AQI Data:', data);  // Debugging: log the air quality data to the console
            setAirQualityData(data);
        };

        socket.onclose = () => {
            console.log('WebSocket connection for AQI closed');
        };

        socket.onerror = (error) => {
            console.error('WebSocket for AQI error:', error);
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div className = 'databox'>
            <h2>Air Quality Index</h2>
            {airQualityData ? (
                <div>
                    <p><strong>Location:</strong> {airQualityData.location}</p>
                    <p><strong>AQI:</strong> {airQualityData.aqi}</p>
                    <p><strong>Status:</strong> {airQualityData.status}</p>
                    <p><strong>Temperature:</strong> {airQualityData.temperature}°C</p>
                    <p><strong>Humidity:</strong> {airQualityData.humidity}%</p>
                    <p><strong>Pressure:</strong> {airQualityData.pressure} hPa</p>
                    <p><strong>Time:</strong> {airQualityData.recorded_at}</p>
                </div>
            ) : (
                <p>Waiting for air quality updates...</p>
            )}
        </div>
    );
};

export default AirQualityWebSocket;