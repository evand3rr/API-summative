const express = require("express");
const fetch = require("node-fetch");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();  // Load API key from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// API Route: Fetch Weather Data from OpenWeatherMap
app.get("/api/weather", async (req, res) => {
    const city = req.query.city;
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
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

