import React from 'react';
import { HourForecastProps } from '../types/types';
const HourForecast: React.FC<HourForecastProps> = ({ weather, hour, temperature }) => {
  return (
    <div className="my-3 p-2 flex justify-between items-center rounded-lg text-white bg-[#312f4bff]">
      <div className="flex items-center">
        <img src={weather} alt="" className="w-1- h-10" />
        <span>{hour}</span>
      </div>
      <span>{temperature}</span>
    </div>
  );
};

export default HourForecast;
