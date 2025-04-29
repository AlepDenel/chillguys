import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';

import Home from './Home';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import AirQualityPolling from './AirQualityPolling';
import WaterQualityPolling from './WaterQualityPolling';

function App() {
  return (
    <Router>
      <div
        className="container"
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
        <nav>
          <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: '10px' }}>
            <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
            <li><Link to="/about" style={{ color: 'white' }}>About Us</Link></li>
            <li><Link to="/faq" style={{ color: 'white' }}>FAQ</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
