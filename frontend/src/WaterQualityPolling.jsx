import React, { useState, useEffect } from 'react';

const baseURL = 'http://localhost:8000';

const WaterQualityPolling = () => {
    const [waterQualityList, setWaterQualityList] = useState([]);

    useEffect(() => {
        const fetchWQI = async () => {
            try {
                const response = await fetch(`${baseURL}/api/latest-wqi/`);
                const data = await response.json();
                console.log('Fetched WQI:', data);
                setWaterQualityList(data);
            } catch (error) {
                console.error('Error fetching WQI:', error);
            }
        };

        fetchWQI();
        const interval = setInterval(fetchWQI, 10000); // every 10 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="databox">
            <h2>Water Quality Index</h2>
            {waterQualityList.length > 0 ? (
                waterQualityList.map((wqi, index) => (
                    <div key={index} style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#efe', borderRadius: '8px' }}>
                        <p><strong>Station:</strong> {wqi.station}</p>
                        <p><strong>WQI:</strong> {wqi.wqi}</p>
                        <p><strong>Status:</strong> {wqi.status}</p>
                        <p><strong>Time:</strong> {wqi.recorded_at}</p>
                    </div>
                ))
            ) : (
                <p>Waiting for water quality data...</p>
            )}
        </div>
    );
};

export default WaterQualityPolling;