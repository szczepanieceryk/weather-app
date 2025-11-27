import React from 'react';
import DailyForecastCell from '../components/DailyForecastCell';
import { DailyForecastCellProps } from '../types/types';
const weatherData: DailyForecastCellProps[] = [
  { id: 1, day: 'Tue', weatherIcon: '', temperature: { day: '68', night: '57' } },
  { id: 2, day: 'Wed', weatherIcon: '', temperature: { day: '70', night: '59' } },
  { id: 2, day: 'Thu', weatherIcon: '', temperature: { day: '75', night: '57' } },
];

const DailyForecast: React.FC = () => {
  return (
    <div className="">
      <span className="block">Daily forecast</span>
      <div className="flex flex-wrap justify-center">
        {weatherData?.map?.((cell) => <DailyForecastCell key={cell.id} {...cell} />) || []}
      </div>
    </div>
  );
};

export default DailyForecast;
