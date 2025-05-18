import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const Home = () => {
  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState('aqi');
  const [selectedAqiLocation, setSelectedAqiLocation] = useState('Sibu');
  const [selectedWqiLocation, setSelectedWqiLocation] = useState('Sg. Sarawak');
  const [aqiData, setAqiData] = useState([]);
  const [wqiData, setWqiData] = useState([]);
  const [expandedStatus, setExpandedStatus] = useState(null);
  const [expandedWqiStatus, setExpandedWqiStatus] = useState(null);
  
  const getAQIRange = (status) => {
    switch (status) {
      case 'GOOD': return '0 – 50';
      case 'MODERATE': return '51 – 100';
      case 'RISKY': return '101 – 150';
      case 'UNHEALTHY': return '151 – 200';
      case 'TOXIC': return '201 – 300';
      case 'HAZARDOUS': return '300+';
      default: return '';
    }
  };
  
  const getWQIRange = (status) => {
    switch (status) {
      case 'CLEAN': return '100 – 81';
      case 'SLIGHTLY POLLUTED': return '80 – 60';
      case 'CONTAMINATED': return '59 – 0';
      default: return '';
    }
  };

  useEffect(() => {
    const fetchAQI = async () => {
      try {
        const res = await fetch(`${baseURL}/api/latest-aqi/`);
        const data = await res.json();
        setAqiData(data);
      } catch (err) {
        console.error("AQI fetch error", err);
      }
    };

    const fetchWQI = async () => {
      try {
        const res = await fetch(`${baseURL}/api/latest-wqi/`);
        const data = await res.json();
        setWqiData(data);
      } catch (err) {
        console.error("WQI fetch error", err);
      }
    };    

    fetchAQI();
    fetchWQI();
    const interval = setInterval(() => {
      fetchAQI();
      fetchWQI();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleLocationClick = (loc) => {
    if (selectedIndex === 'aqi') {
      setSelectedAqiLocation(loc);
    } else {
      setSelectedWqiLocation(loc);
    }
  };

  const getFilteredData = () => {
    const list = selectedIndex === 'aqi' ? aqiData : wqiData;
    const currentLoc = selectedIndex === 'aqi' ? selectedAqiLocation : selectedWqiLocation;
    return currentLoc
      ? list.filter(item => item.location === currentLoc || item.station === currentLoc)
      : [];
  };

  const getStatusImage = (status) => {
    const key = status?.toLowerCase().replace(/\s/g, '');
    return selectedIndex === 'aqi' ? `/aqi${key}.png` : `/wqi${key}.png`;
  };

  const locations = [...new Set(
    (selectedIndex === 'aqi' ? aqiData.map(a => a.location) : wqiData.map(w => w.station))
  )];

  return (
  <div 
  className = "home-background"
  style={{
    background: `url(${process.env.PUBLIC_URL}/sibu-bg.jpg) no-repeat center center fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh',
  }}
  >
    {/* ===================== Background Overlay ===================== */}
    <div className="background-overlay"></div>

    {/* ===================== Container ===================== */}
    <div className="home-container">

      {/* ===================== Header ===================== */}
      <div className="home-header-row">
        <div className="home-title">
          <h1>{t('home.title')}</h1>
          <h3>{t('home.subtitle')}</h3>
        </div>
        <div className="home-buttons">
          <button className={`aqi-btn ${selectedIndex === 'aqi' ? 'active' : ''}`} onClick={() => setSelectedIndex('aqi')}>AQI</button>
          <button className={`wqi-btn ${selectedIndex === 'wqi' ? 'active' : ''}`} onClick={() => setSelectedIndex('wqi')}>WQI</button>
        </div>
      </div>

      {/* ===================== Main Grid with Containers ===================== */}
      <div className="main-grid">

        {/* ===================== Available Locations ===================== */}
        <div className="glass-section locations-column">
          <h2>{selectedIndex === 'aqi' ? t('home.availableLocations') : t('home.availableStations')}</h2>
          <div className="locations-grid">
            {locations.map((loc, idx) => (
              <button
                key={idx}
                onClick={() => handleLocationClick(loc)}
                className={`location-btn ${
                  (selectedIndex === 'aqi' && selectedAqiLocation === loc) ||
                  (selectedIndex === 'wqi' && selectedWqiLocation === loc)
                    ? 'selected'
                    : ''
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* ===================== Visual Display ===================== */}
        <div className="glass-section data-column">
          <h2 style={{ textAlign: 'left' }}>
            {selectedIndex === 'aqi' ? t('home.airQualityIndex') : t('home.waterQualityIndex')}
          </h2>

          {getFilteredData().map((data, i) => (
            <div key={i} className="visual-box">
              {/* Shape */}
              <div className={`visual-shape ${data.status === 'Moderate' ? 'moderate-shape' : ''}`}>
                <img src={getStatusImage(data.status)} alt={data.status} />
                <div className="visual-content">
                  <span className="visual-label">{selectedIndex === 'aqi' ? t('home.aqi') : t('home.wqi')}</span>
                  <span className="visual-value">{selectedIndex === 'aqi' ? data.aqi : data.wqi}</span>
                  <span className="visual-status">{data.status}</span>
                </div>
              </div>

              {/* Right-side Info */}
              <div className="visual-info">
                <div className="visual-top-line">
                  <span className="record-time">{t('home.time')}: {data.recorded_at}</span>
                  <span className="record-status">{t('home.status')}: {data.status}</span>
                </div>

                {selectedIndex === 'aqi' && (
                  <>
<div className="visual-metrics-group">
  <div className="metric-block">
    <img src="/temperature.png" alt="temp" />
    <span className="metric-label">{t('home.temperature')}</span>
    <span className="metric-value">{data.temperature}°C</span>
  </div>
  <div className="metric-block">
    <img src="/humidity.png" alt="humidity" />
    <span className="metric-label">{t('home.humidity')}</span>
    <span className="metric-value">{data.humidity}%</span>
  </div>
  <div className="metric-block">
    <img src="/pressure.png" alt="pressure" />
    <span className="metric-label">{t('home.pressure')}</span>
    <span className="metric-value">{data.pressure} hPa</span>
  </div>
</div>
                  </>
                )}

<div className="visual-footer">
    <span className="location-name">
      {selectedIndex === 'aqi' ? data.location : data.station}
    </span>
    {selectedIndex === 'aqi' ? (
      <div className="data-credit">
        AQI data powered by <img src="/aqicn.png" alt="aqicn" />
      </div>
    ) : (
      <div className="data-warning">
        ⚠️ Warning: the WQI data is <strong>FAKE!</strong>
                    </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== Dashboard with glass container ===================== */}
      <div className="glass-section status-dashboard">
        <h2>{selectedIndex === 'aqi' ? t('home.aqiDashboard') : t('home.wqiDashboard')}</h2>
        <div className="status-grid">
        {selectedIndex === 'aqi' ? (
  expandedStatus ? (
    <div className="status-expanded-two-column">
      <div className="expanded-card-left">
        <span className="status-label">{expandedStatus}</span>
        <span className="status-range">{getAQIRange(expandedStatus)}</span>
        <div className="shape-wrapper">
          <img src={`/aqi${expandedStatus.toLowerCase()}.png`} alt={expandedStatus} />
          <span className="shape-count">
          {aqiData.filter(d => d.status?.toLowerCase() === expandedStatus.toLowerCase()).length}
          </span>
        </div>
        <span className="status-locations">{t('home.locations')}</span>
      </div>

      <div className="expanded-card-right">
      <p><strong>{t('home.implication')}:</strong> {t(`home.implications.${expandedStatus}`)}</p>
        <p><strong>{t('home.healthAdvice')}:</strong> {t(`home.advice.${expandedStatus}`)}</p>
        <button className="go-back-btn" onClick={() => setExpandedStatus(null)}>{t('home.goBack')}</button>
      </div>
    </div>
  ) : (
    <>
      {['GOOD', 'MODERATE', 'RISKY', 'UNHEALTHY', 'TOXIC', 'HAZARDOUS'].map(status => (
  <div
    key={status}
    className="status-item"
    onClick={() => setExpandedStatus(status)}
  >
    <span className="status-label">{status.toUpperCase()}</span>
    <span className="status-range">{getAQIRange(status)}</span>
    <div className="shape-wrapper">
      <img src={`/aqi${status.toLowerCase()}.png`} alt={status} />
      <span className="shape-count">
        {
          aqiData.filter(d =>
            d.status?.toLowerCase() === status.toLowerCase()
          ).length
        }
      </span>
    </div>
    <span className="status-locations">{t('home.locations')}</span>
  </div>
))}
    </>
  )
) : (
  expandedWqiStatus ? (
    <div className="status-expanded-two-column">
      <div className="expanded-card-left">
        <span className="status-label">{expandedWqiStatus}</span>
        <span className="status-range">{getWQIRange(expandedWqiStatus)}</span>
        <div className="shape-wrapper">
          <img src={`/wqi${expandedWqiStatus.toLowerCase().replace(/\s/g, '')}.png`} alt={expandedWqiStatus} />
          <span className="shape-count">
          {wqiData.filter(d => d.status?.toLowerCase() === expandedWqiStatus.toLowerCase()).length}
          </span>
        </div>
        <span className="status-locations">{t('home.stations')}</span>
      </div>

      <div className="expanded-card-right">
        <p><strong>{t('home.implication')}:</strong> {t(`home.wqiImplications.${expandedWqiStatus}`)}</p>
        <p><strong>{t('home.healthAdvice')}:</strong> {t(`home.wqiAdvice.${expandedWqiStatus}`)}</p>
        <button className="go-back-btn" onClick={() => setExpandedWqiStatus(null)}>{t('home.goBack')}</button>
      </div>
    </div>
  ) : (
    <>
      {['CLEAN', 'SLIGHTLY POLLUTED', 'CONTAMINATED'].map(status => (
  <div
    key={status}
    className="status-item"
    onClick={() => setExpandedWqiStatus(status)}
  >
    <span className="status-label">{status.toUpperCase()}</span>
    <span className="status-range">{getWQIRange(status)}</span>
    <div className="shape-wrapper">
      <img src={`/wqi${status.toLowerCase().replace(/\s/g, '')}.png`} alt={status} />
      <span className="shape-count">
        {
          wqiData.filter(d =>
            d.status?.toLowerCase() === status.toLowerCase()
          ).length
        }
      </span>
    </div>
    <span className="status-locations">{t('home.stations')}</span>
  </div>
))}
    </>
  )
)}
</div>
      </div>
    </div>
  </div>
  );
};

export default Home;