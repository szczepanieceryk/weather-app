import { useState } from 'react';
import { WeatherData } from '../types/types';
const useWeatherForecast = () => {
  const [location, setLocation] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value;
    setLocation(result);
  };
  const handleWeatherSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log('Search for weather');

    const API_URL =
      'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';

    try {
      const res: Response = await fetch(API_URL, {
        headers: {
          Accept: 'application/json',
        },
      });
      const weatherData: WeatherData = await res.json();

      setWeatherData(weatherData);
      console.log(weatherData);
    } catch (error) {
      console.error(`Error while API call: ${error} `);
    } finally {
      setLoading(false);
    }
  };
  return { loading, location, weatherData, handleWeatherSearch, handleLocationChange };
};

export default useWeatherForecast;
