const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Environment variables for API keys and endpoints
const WEATHER_API_URL = 'https://developer.data.gov.my/realtime-api/weather';
const AIR_QUALITY_API_URL = 'https://api.waqi.info/feed/here/?token=YOUR_TOKEN';
const RIVER_QUALITY_API_URL = 'https://eqms.doe.gov.my/RQIMS/conti_river';
const AIR_QUALITY_MAP_URL = 'https://aqicn.org/map/malaysia/';

// Middleware to parse JSON
app.use(express.json());

// Function to fetch real-time air quality data
const fetchAirQuality = async () => {
    try {
        const response = await axios.get(AIR_QUALITY_API_URL);
        const data = response.data.data;
        return {
            aqi: data.aqi,
            location: data.city.name,
            timestamp: new Date().toISOString(),
        };
    } catch (error) {
        console.error('Error fetching air quality data:', error);
        return null;
    }
};

// Function to fetch river quality index
const fetchRiverQuality = async () => {
    try {
        const response = await axios.get(RIVER_QUALITY_API_URL);
        const data = response.data;
        return {
            rqi: data.rqi,
            location: data.location,
            timestamp: new Date().toISOString(),
        };
    } catch (error) {
        console.error('Error fetching river quality data:', error);
        return null;
    }
};

// Function to fetch weather forecast
const fetchWeatherForecast = async () => {
    try {
        const response = await axios.get(WEATHER_API_URL);
        const data = response.data;
        return {
            forecast: data.forecast,
            timestamp: new Date().toISOString(),
        };
    } catch (error) {
        console.error('Error fetching weather forecast:', error);
        return null;
    }
};

// WebSocket for real-time alerts
wss.on('connection', (ws) => {
    console.log('Client connected');

    // Send real-time alerts every 10 minutes
    const alertInterval = setInterval(async () => {
        const airQuality = await fetchAirQuality();
        const riverQuality = await fetchRiverQuality();

        if (airQuality && airQuality.aqi > 100) {
            ws.send(JSON.stringify({
                type: 'air_quality_alert',
                message: `Poor air quality detected in ${airQuality.location}: AQI ${airQuality.aqi}`,
            }));
        }

        if (riverQuality && riverQuality.rqi > 50) {
            ws.send(JSON.stringify({
                type: 'river_quality_alert',
                message: `Poor river quality detected in ${riverQuality.location}: RQI ${riverQuality.rqi}`,
            }));
        }
    }, 600000); // 10 minutes interval

    ws.on('close', () => {
        console.log('Client disconnected');
        clearInterval(alertInterval);
    });
});

// RESTful API for air quality data
app.get('/api/air-quality', async (req, res) => {
    const airQuality = await fetchAirQuality();
    if (airQuality) {
        res.json(airQuality);
    } else {
        res.status(500).json({ error: 'Failed to fetch air quality data' });
    }
});

// RESTful API for river quality data
app.get('/api/river-quality', async (req, res) => {
    const riverQuality = await fetchRiverQuality();
    if (riverQuality) {
        res.json(riverQuality);
    } else {
        res.status(500).json({ error: 'Failed to fetch river quality data' });
    }
});

// RESTful API for weather forecast
app.get('/api/weather-forecast', async (req, res) => {
    const weatherForecast = await fetchWeatherForecast();
    if (weatherForecast) {
        res.json(weatherForecast);
    } else {
        res.status(500).json({ error: 'Failed to fetch weather forecast' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Mid-end server running on port ${PORT}`);
});