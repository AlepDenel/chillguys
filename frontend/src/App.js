import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home.jsx';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import Team from './team.jsx';
import Landing from './Landing';
import Dashboard from './Dashboard';
import './App.css';
import './style.css';

function App() {
  return (
    <Router>
      {/* Background video */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/sarawak.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Navigation bar (outside container!) */}
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        padding: '15px',
        backgroundColor: '#2c3e50',
        color: 'white',
        position: 'relative',
        zIndex: 2
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link>
        <Link to="/faq" style={{ color: 'white', textDecoration: 'none' }}>FAQ</Link>
        <Link to="/team" style={{ color: 'white', textDecoration: 'none' }}>Team</Link>
      </nav>

      {/* Page content */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />} />  
          <Route path="/home" element={<Home />} />
           <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
