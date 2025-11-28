import React from 'react';
import HourForecast from '../components/HourForecast';
import { HourForecastProps } from '../types/types';
import sunbIcon from '../assets/images/icon-sunny.webp';
import cloudyIcon from '../assets/images/icon-partly-cloudy.webp';
import rainIcon from '../assets/images/icon-rain.webp';

const forecastData: HourForecastProps[] = [
  {
    weather: sunbIcon,
    hour: '3PM',
    temperature: '20',
  },
  {
    weather: cloudyIcon,
    hour: '4PM',
    temperature: '20',
  },
  {
    weather: cloudyIcon,
    hour: '5PM',
    temperature: '20',
  },
  {
    weather: rainIcon,
    hour: '6PM',
    temperature: '19',
  },
];
const HourlyForecast: React.FC = () => {
  return (
    <div className="max-w-[95%] p-3 mx-auto rounded-xl bg-[#272541ff]">
      <span className="block mt-2 mb-4 text-white">
        <strong>Hourly forecast</strong>
      </span>
      <div>{forecastData?.map?.((forecast, i) => <HourForecast key={i} {...forecast} />)}</div>
    </div>
  );
};

export default HourlyForecast;
