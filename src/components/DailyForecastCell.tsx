import React from 'react';

import { DailyForecastCellProps } from '../types/types';
const DailyForecastCell: React.FC<DailyForecastCellProps> = ({ day, weatherIcon, temperature }) => {
  return (
    <div className="flex flex-wrap justify-center text-center min-w-[100px] mx-1 rounded-md text-white bg-[#3d3b5eff]">
      <span className="mb-2 block basis-full">{day}</span>
      <img src={weatherIcon} alt="" />
      <div className="flex flex-wrap justify-between">
        <span>{temperature.day}</span>
        <span>{temperature.night}</span>
      </div>
    </div>
  );
};

export default DailyForecastCell;
