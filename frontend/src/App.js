import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Info, HelpCircle } from 'lucide-react';  // error pointed this out as unused
import Home from './home.jsx';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import './App.css';

function App() {
  return (
    <Router>
      <div
        className="container"
        style={{
          backgroundImage: "url('/sibu-bg.jpg')",
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
        <nav style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          padding: '15px',
          backgroundColor: '#2c3e50',
          color: 'white'
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link>
          <Link to="/faq" style={{ color: 'white', textDecoration: 'none' }}>FAQ</Link>
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
