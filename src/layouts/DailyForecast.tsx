import React from 'react';
import DailyForecastCell from '../components/DailyForecastCell';
import { DailyForecastCellProps } from '../types/types';
import sunIcon from '../assets/images/icon-sunny.webp';
import partiallyRainIcon from '../assets/images/icon-partly-cloudy.webp';
import rainIcon from '../assets/images/icon-rain.webp';
import stormIcon from '../assets/images/icon-storm.webp';
import snowIcon from '../assets/images/icon-snow.webp';
import fogIcon from '../assets/images/icon-fog.webp';

const weatherData: DailyForecastCellProps[] = [
  { id: 1, day: 'Tue', weatherIcon: partiallyRainIcon, temperature: { day: '68', night: '57' } },
  { id: 2, day: 'Wed', weatherIcon: rainIcon, temperature: { day: '70', night: '59' } },
  { id: 3, day: 'Thu', weatherIcon: sunIcon, temperature: { day: '75', night: '57' } },
  { id: 4, day: 'Fri', weatherIcon: sunIcon, temperature: { day: '77', night: '55' } },
  { id: 5, day: 'Sat', weatherIcon: stormIcon, temperature: { day: '70', night: '59' } },
  { id: 6, day: 'San', weatherIcon: snowIcon, temperature: { day: '77', night: '61' } },
  { id: 7, day: 'Mon', weatherIcon: fogIcon, temperature: { day: '75', night: '59' } },
];

const DailyForecast: React.FC = () => {
  return (
    <div className="max-w-[95%] lg:max-w-[60%] mx-auto py-[2rem] lg:mt-3">
      <span className="mb-4 block text-white">
        <strong>Daily forecast</strong>
      </span>
      <div className="flex flex-wrap justify-center gap-3">
        {weatherData?.map?.((cell) => <DailyForecastCell key={cell.id} {...cell} />) || []}
      </div>
    </div>
  );
};

export default DailyForecast;
