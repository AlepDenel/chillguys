import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  // ✅ Inline background style (image from public folder)
  const landingStyle = {
    backgroundImage: "url('/sibu-bg.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };
  
return (
  <div style={landingStyle}>
    <div className="landing-content">
      <h1>
        <span style={{ color: '#cbd60d' }}>SARAWAK</span>
        <span style={{ color: '#d61919' }}>SENSE</span>
      </h1>
      <p>Empowering environmental awareness with real-time data</p>
      <button className="enter-button" onClick={handleEnter}>Today's Data</button>
    </div>
  </div>
);

}

export default Landing;