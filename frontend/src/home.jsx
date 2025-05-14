import React from 'react';
import AirQualityPolling from './AirQualityPolling';
import WaterQualityPolling from './WaterQualityPolling';

function Home() {
  return (
    <div className="glass-box">
      <h1>Sarawak Environmental Monitoring System</h1>
      <p>Real-time air and water quality monitoring</p>
      <AirQualityPolling />
      <WaterQualityPolling />
    </div>
  );
}

export default Home;
