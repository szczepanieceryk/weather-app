import { useState, useEffect } from 'react';
import { WeatherData } from '../types/types';
const useWeatherForecast = (units: string) => {
  const [location, setLocation] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // store last coords so we can refetch when units change
  const [lastCoords, setLastCoords] = useState<{ latitude: number; longitude: number } | null>(
    null,
  );

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value;
    setLocation(result);
  };

  // build URL using Open-Meteo documented params
  const buildUrl = (latitude: number, longitude: number) => {
    const temperature_unit = units === 'imperial' ? 'fahrenheit' : 'celsius';
    const windspeed_unit = units === 'imperial' ? 'mph' : 'kmh';
    // note correct hourly parameter names: temperature_2m, relativehumidity_2m, windspeed_10m
    return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m&temperature_unit=${temperature_unit}&windspeed_unit=${windspeed_unit}&timezone=auto`;
  };

  const fetchWeather = async (latitude: number, longitude: number) => {
    setLoading(true);
    try {
      const API_URL = buildUrl(latitude, longitude);
      const res: Response = await fetch(API_URL, {
        headers: {
          Accept: 'application/json',
        },
      });
      const weatherData: WeatherData = await res.json();
      setWeatherData(weatherData);
      setLastCoords({ latitude, longitude });
      console.log(weatherData);
    } catch (error) {
      console.error(`Error while API call: ${error} `);
    } finally {
      setLoading(false);
    }
  };

  const handleWeatherSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // replace hardcoded coords with geocoding of `location` if needed
    await fetchWeather(52.52, 13.41);
  };

  // refetch when units change (if we have last coords)
  useEffect(() => {
    if (lastCoords) {
      fetchWeather(lastCoords.latitude, lastCoords.longitude);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [units]);

  return { loading, location, weatherData, handleWeatherSearch, handleLocationChange };
};

export default useWeatherForecast;
