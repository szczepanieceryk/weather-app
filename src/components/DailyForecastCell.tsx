import React from 'react';

import { DailyForecastCellProps } from '../types/types';
const DailyForecastCell: React.FC<DailyForecastCellProps> = ({ day, weatherIcon, temperature }) => {
  return (
    <div className="p-1 py-3 max-w-[100px] lg:max-w-[85px] flex flex-wrap justify-center text-center mx-1 rounded-xl text-white bg-[#3d3b5eff]">
      <span className="mb-2 block basis-full">{day}</span>
      <img src={weatherIcon} alt="" className="my-2 w10 h-10" />
      <div className="basis-full flex justify-between max-w-[70px] mx-auto">
        <span>{temperature.day}</span>
        <span>{temperature.night}</span>
      </div>
    </div>
  );
};

export default DailyForecastCell;
