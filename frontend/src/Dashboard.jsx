import React from 'react';
import './style.css';

function Dashboard() {
  return (
    <div className="glass-box dashboard">
      <h2>Environmental Dashboard</h2>

      <div className="dashboard-cards">
        <div className="card good">
          <h4>Good</h4>
          <p>24 Stations</p>
        </div>
        <div className="card moderate">
          <h4>Moderate</h4>
          <p>43 Stations</p>
        </div>
        <div className="card unhealthy">
          <h4>Unhealthy</h4>
          <p>0 Stations</p>
        </div>
        <div className="card very-unhealthy">
          <h4>Very Unhealthy</h4>
          <p>0 Stations</p>
        </div>
        <div className="card hazardous">
          <h4>Hazardous</h4>
          <p>0 Stations</p>
        </div>
        <div className="card unavailable">
          <h4>API</h4>
          <p>1 Station</p>
        </div>
      </div>

      <div className="summary">
        <p><strong>Total Stations:</strong> 68</p>
        <p><strong>Last Updated:</strong> 10 May 2025, 21:32 (GMT +0800)</p>
      </div>

      <p style={{ fontStyle: 'italic', fontSize: '0.9rem', textAlign: 'center', marginTop: '20px' }}>
        AQI data powered by <a href="https://aqicn.com" target="_blank" rel="noreferrer">aqicn.com</a>
        <br />
        <img src="/aqicn-logo.png" alt="AQICN logo" style={{ width: '100px', marginTop: '10px' }} />
      </p>
    </div>
  );
}

export default Dashboard;
