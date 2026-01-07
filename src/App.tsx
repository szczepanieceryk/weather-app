import React, { useState } from 'react';
import Navigation from './layouts/Navigation';
import Header from './layouts/Header';
import TodayForecast from './components/TodayForecast';
import DailyForecast from './layouts/DailyForecast';
import HourlyForecast from './layouts/HourlyForecast';
import sunIcon from './assets/images/icon-sunny.webp';
import useWeatherForecast from './hooks/useWeatherForecast';
const App = () => {
  const [unit, setUnit] = useState<string>('metric');

  const { location, weatherData, handleWeatherSearch, handleLocationChange } = useWeatherForecast();

  // transform API data into TodayForecast props shape
  const todayProps = weatherData
    ? {
        location: location || `${weatherData.latitude}, ${weatherData.longitude}`,
        date: weatherData.current?.time
          ? new Date(weatherData.current.time).toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
          : new Date().toLocaleDateString(),
        weather: {
          // map weather icon based on API data (fallback to sunIcon)
          icon: sunIcon,
          temperature: `${Math.round(weatherData.current.temperature_2m)}°`,
        },
        additionalInfo: {
          feels: `${Math.round(weatherData.current.temperature_2m)}°`,
          humidity: weatherData.hourly?.relative_humidity_2m?.[0]
            ? `${weatherData.hourly.relative_humidity_2m[0]}%`
            : '—',
          wind: `${weatherData.current.wind_speed_10m} ${weatherData.current_units?.wind_speed_10m || ''}`,
          precipitation: '0', // extend WeatherData/type to include precipitation from API if needed
        },
      }
    : {
        // fallback values shown before any API response
        location: 'Berlin, Germany',
        date: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        weather: { icon: sunIcon, temperature: '-5°' },
        additionalInfo: { feels: '-7°', humidity: '46%', wind: '14 km/h', precipitation: '0 mm' },
      };

  return (
    <div className="pb-[4rem] bg-[#03012dff]">
      <Navigation unit={unit} setUnit={setUnit} />
      <Header
        location={location}
        handleWeatherSearch={handleWeatherSearch}
        handleLocationChange={handleLocationChange}
      />
      <div className="lg:grid lg:grid-cols-3 lg:mt-[3rem] lg:max-w-6xl lg:mx-auto justify-items-center">
        <div className="lg:col-span-2">
          <TodayForecast
            location={todayProps.location}
            date={todayProps.date}
            weather={todayProps.weather}
            additionalInfo={todayProps.additionalInfo}
          />
          <DailyForecast />
        </div>
        <HourlyForecast />
      </div>
    </div>
  );
};

export default App;
