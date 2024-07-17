import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/weather';
import LocationInput from './components/LocationInput';
import './App.css';

const API_KEY = '09a963f9437c31ee42569c7535b1a043';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  const fetchWeatherByLocation = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeatherByLocation(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error("Error getting the location", error);
      }
    );
  }, []);

  return (
    <div className="app">
      <LocationInput onSearch={fetchWeather} />
      <Weather weatherData={weatherData} />
    </div>
  );
};

export default App;
