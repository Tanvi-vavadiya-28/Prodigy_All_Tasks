import React from 'react';
import './Weather.css';

const Weather = ({ weatherData }) => {
  if (!weatherData) return null;

  const { name, main, weather, wind } = weatherData;

  return (
    <div className="weather-container">
      <h2>Weather in {name}</h2>
      <div className="weather-info">
        <p>Temperature: {main.temp}°C</p>
        <p>Condition: {weather[0].description}</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default Weather;
