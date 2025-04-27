import React, { useState, useEffect } from 'react';

const WaterQualityWebSocket = () => {
    const [waterQualityData, setWaterQualityData] = useState(null);
    
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8000/ws/wqi/');

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log('Water Quality Data:', data);  // Debugging: log the water quality data to the console
            setWaterQualityData(data);
        };

        socket.onclose = () => {
            console.log('WebSocket connection for WQI closed');
        };

        socket.onerror = (error) => {
            console.error('WebSocket for WQI error:', error);
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div className = 'databox'>
            <h2>Water Quality Index</h2>
            {waterQualityData ? (
                <div>
                    <p><strong>Station:</strong> {waterQualityData.station}</p>
                    <p><strong>WQI:</strong> {waterQualityData.wqi}</p>
                    <p><strong>Status:</strong> {waterQualityData.status}</p>
                    <p><strong>Time:</strong> {waterQualityData.recorded_at}</p>
                </div>
            ) : (
                <p>Waiting for water quality updates...</p>
            )}
        </div>
    );
};

export default WaterQualityWebSocket;