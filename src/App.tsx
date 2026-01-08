import React, { useState } from 'react';
import Navigation from './layouts/Navigation';
import Header from './layouts/Header';
import TodayForecast from './components/TodayForecast';
import DailyForecast from './layouts/DailyForecast';
import HourlyForecast from './layouts/HourlyForecast';
import sunIcon from './assets/images/icon-sunny.webp';
import useWeatherForecast from './hooks/useWeatherForecast';
import { WeatherData } from './types/types';
const App = () => {
  const [unit, setUnit] = useState<string>('metric');

  // hook nie przyjmuje teraz parametru unit — użyj bez argumentu
  const { location, weatherData, handleWeatherSearch, handleLocationChange } =
    useWeatherForecast(unit);

  // transform API data into TodayForecast props shape
  const todayProps = weatherData
    ? (() => {
        const current: WeatherData['current_weather'] | undefined = weatherData?.current_weather;
        const hourly: WeatherData['hourly'] | undefined = weatherData?.hourly;
        const timeIndex =
          hourly?.time && current?.time
            ? hourly.time.findIndex((t: string) => t === current.time)
            : -1;

        const temperature =
          current?.temperature ??
          (timeIndex >= 0 ? hourly?.temperature_2m?.[timeIndex] : undefined);

        const windspeed =
          current?.windspeed ?? (timeIndex >= 0 ? hourly?.windspeed_10m?.[timeIndex] : undefined);

        const humidity =
          timeIndex >= 0 && hourly?.relativehumidity_2m?.[timeIndex] != null
            ? `${hourly.relativehumidity_2m[timeIndex]}%`
            : '—';

        return {
          location: location || `${weatherData.latitude}, ${weatherData.longitude}`,
          date: current?.time
            ? new Date(current.time).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })
            : new Date().toLocaleDateString(),
          weather: {
            icon: sunIcon,
            temperature: temperature != null ? `${Math.round(temperature)}°` : '—',
          },
          additionalInfo: {
            feels: temperature != null ? `${Math.round(temperature)}°` : '—',
            humidity,
            wind:
              windspeed != null
                ? `${Math.round(windspeed)} ${unit === 'imperial' ? 'mph' : 'km/h'}`
                : '—',
            precipitation: '0',
          },
        };
      })()
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
