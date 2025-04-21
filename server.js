const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")
dotenv.config();  // Load API key from .env file

const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: false // Set to true only if using cookies or auth headers
  }));
const PORT = process.env.PORT || 3000;

// API Route: Fetch Weather Data from OpenWeatherMap
app.get("/api/weather", async (req, res) => {
    const {city} = req.query;
    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }

    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            return res.status(404).json({ error: "City not found" });
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

