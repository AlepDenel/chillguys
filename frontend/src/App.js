import React from 'react';
import './style.css';
import AirQualityWebSocket from './AirQualityWebSocket';
import WaterQualityWebSocket from './WaterQualityWebSocket';

function App() {
  return (
    <div className="container"
    style={{
      backgroundImage: `url('/sibu-bg.jpg')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'fixed',
      minHeight: '100vh',
      width: '100%',
      margin: '0',
      padding: '0',
    }}
    >
      <h1>Smart Environmental Monitoring System</h1>
      <p>Real-time air and water quality monitoring</p>

      <AirQualityWebSocket /> {/* Air Quality WebSocket component */}
      <WaterQualityWebSocket /> {/* Water Quality WebSocket component */}
      
    </div>
  );
}

export default App;