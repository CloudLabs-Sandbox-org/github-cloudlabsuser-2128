const fetch = require('node-fetch');

// Replace with your OpenWeatherMap API key
const API_KEY = 'your_api_key_here';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
async function fetchWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(`Weather in ${data.name}:`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Weather: ${data.weather[0].description}`);
    } catch (error) {
        console.error('Failed to fetch weather data:', error.message);
    }
}

// Example usage
fetchWeather('London');