const apiUrl = "http://localhost:3000/api/weather";

// Function to fetch weather data
async function fetchWeather(city) {
  try {
    const response = await fetch(`${apiUrl}?city=${city}`);
    const data = await response.json();
    updateUI(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to fetch weather data. Please try again.");
  }
}

// Function to update the UI with weather data
function updateUI(data) {
  document.getElementById("city-name").textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById("temperature").textContent = `${data.main.temp.toFixed(1)}°C`;
  document.getElementById("weather-description").textContent = data.weather[0].description;
  document.getElementById("weather-img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  document.getElementById("wind").textContent = `${data.wind.speed} m/s`;
  document.getElementById("humidity").textContent = `${data.main.humidity}%`;
  document.getElementById("pressure").textContent = `${data.main.pressure} hPa`;
  document.getElementById("visibility").textContent = `${(data.visibility / 1000).toFixed(1)} km`;
  document.getElementById("sunrise").textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("sunset").textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Event listener for search button
document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city-input").value.trim();
  if (city) {
    fetchWeather(city);
  }
});

// Initial fetch for default city (Kigali)
fetchWeather("kigali");