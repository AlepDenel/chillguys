const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const axios = require('axios');
const cors = require('cors');

// ======================
// Helper Functions
// ======================
function log(message, level = 'info') {
  const timestamp = new Date().toISOString();
  console[level](`[${timestamp}] ${message}`);
}

function validateAQIData(data) {
  if (data.aqi === undefined || data.aqi < 0) {
    throw new Error(`Invalid AQI data: ${JSON.stringify(data)}`);
  }
}

// ======================
// Server Configuration
// ======================
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());
app.use(express.json());

const config = {
  AIR_QUALITY_API_KEY: '77a74252a1b9767b379da56b2f50817cf3c0973c',
  AIR_QUALITY_BASE_URL: 'https://api.waqi.info/feed',
  PORT: process.env.PORT || 3000
};

// Sarawak station IDs (from fetch_aqi.py)
const SARAWAK_STATIONS = {
  '@2610': 'Kuching',
  '@2612': 'Miri',
  '@2613': 'Bintulu',
  '@2614': 'Sibu',
  '@2615': 'Samarahan',
  '@2616': 'Sri Aman',
  '@2617': 'Sarikei',
  '@2618': 'Kapit',
  '@2619': 'Limbang',
  '@9501': 'Mukah',
  '@2620': 'Samalaju'
};

// ======================
// Core API Functions
// ======================

async function fetchAllStationsAQI() {
  try {
    const stationPromises = Object.entries(SARAWAK_STATIONS).map(
      async ([stationId, location]) => {
        const url = `${config.AIR_QUALITY_BASE_URL}/${stationId}/?token=${config.AIR_QUALITY_API_KEY}`;
        const response = await axios.get(url);
        const data = response.data.data;
        
        validateAQIData(data);
        return {
          stationId,
          location,
          aqi: data.aqi,
          timestamp: new Date().toISOString(),
          status: classifyAQI(data.aqi)
        };
      }
    );

    return await Promise.all(stationPromises);
  } catch (error) {
    log(`Failed to fetch station data: ${error.message}`, 'error');
    throw error;
  }
}

function classifyAQI(aqi) {
  if (aqi <= 50) return 'Good';
  if (aqi <= 100) return 'Moderate';
  if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
  if (aqi <= 200) return 'Unhealthy';
  if (aqi <= 300) return 'Very Unhealthy';
  return 'Hazardous';
}

// ======================
// API Endpoints
// ======================

// Get AQI for all Sarawak stations
app.get('/api/sarawak-aqi', async (req, res) => {
  try {
    log('Fetching AQI for all Sarawak stations...');
    const stationData = await fetchAllStationsAQI();
    res.json({
      success: true,
      data: stationData,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    log(`API error: ${error.message}`, 'error');
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get AQI for a specific station
app.get('/api/sarawak-aqi/:stationId', async (req, res) => {
  try {
    const stationId = req.params.stationId;
    if (!SARAWAK_STATIONS[stationId]) {
      throw new Error('Invalid station ID');
    }

    const url = `${config.AIR_QUALITY_BASE_URL}/${stationId}/?token=${config.AIR_QUALITY_API_KEY}`;
    const response = await axios.get(url);
    const data = response.data.data;

    validateAQIData(data);
    res.json({
      success: true,
      data: {
        stationId,
        location: SARAWAK_STATIONS[stationId],
        aqi: data.aqi,
        status: classifyAQI(data.aqi),
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    log(`Station fetch error: ${error.message}`, 'error');
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ======================
// WebSocket Alerts
// ======================

wss.on('connection', (ws) => {
  log('New WebSocket client connected');

  // Send alerts when any station exceeds AQI 100
  const alertInterval = setInterval(async () => {
    try {
      const stationData = await fetchAllStationsAQI();
      stationData.forEach(station => {
        if (station.aqi > 100) {
          ws.send(JSON.stringify({
            type: 'air_alert',
            station: station.location,
            aqi: station.aqi,
            message: `Poor air quality in ${station.location} (AQI: ${station.aqi})`,
            timestamp: new Date().toISOString()
          }));
        }
      });
    } catch (error) {
      log(`Alert error: ${error.message}`, 'error');
    }
  }, 600000); // Check every 10 minutes

  ws.on('close', () => {
    clearInterval(alertInterval);
    log('Client disconnected');
  });
});

// ======================
// Server Start
// ======================
server.listen(config.PORT, () => {
  log(`Server running on port ${config.PORT}`);
  log(`WebSocket: ws://localhost:${config.PORT}`);
});