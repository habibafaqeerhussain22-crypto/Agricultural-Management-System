// src/hooks/useWeather.js
import { useState, useEffect } from "react";

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      // Lahore coordinates: 31.5497, 74.3436
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=31.5497&longitude=74.3436&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation&timezone=auto"
      );
      if (!response.ok) throw new Error("Failed to fetch live weather data.");
      const data = await response.json();
      
      setWeatherData({
        temperature: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m,
        windSpeed: data.current.wind_speed_10m,
        rainChance: data.current.precipitation,
        lastUpdated: new Date().toLocaleTimeString(),
      });
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 300000); // Har 5 minute baad auto-refresh
    return () => clearInterval(interval);
  }, []);

  return { weatherData, loading, error, refetch: fetchWeather };
};