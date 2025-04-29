import React from 'react';
import './style.css';
import AirQualityPolling from './AirQualityPolling';
import WaterQualityPolling from './WaterQualityPolling';

function App() {
  return (
    <div className="container"
    style={{
      backgroundImage: `url('/sibu-bg.jpg')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      width: '100%',
      margin: '0',
      padding: '0',
    }}
    >
      <h1>Sarawak Environmental Monitoring System</h1>
      <p>Real-time air and water quality monitoring</p>

      <AirQualityPolling /> {/* Air Quality Polling component */}
      <WaterQualityPolling /> {/* Water Quality Polling component */}
      
    </div>
  );
}

export default App;