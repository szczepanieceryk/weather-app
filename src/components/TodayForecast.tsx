import React from 'react';
import mobileBgImg from '../assets/images/bg-today-small.svg';
import desktopBgImg from '../assets/images/bg-today-large.svg';

import ForecastCube from './ForecastCube';
import { TodayForecastProps } from '../types/types';

const TodayForecast: React.FC<TodayForecastProps> = ({
  location,
  date,
  weather,
  additionalInfo,
}) => {
  const returnAppropriateBgImg = (): string => {
    let bgImg = mobileBgImg;
    if (window.innerWidth >= 992) {
      bgImg = desktopBgImg;
    }

    return bgImg;
  };

  return (
    <div>
      <div
        className="max-w-[95%] lg:max-w-full mx-auto mt-[3rem] lg:mt-0 py-[3rem] lg:py-[4rem] px-2 flex flex-wrap justify-center lg:flex-start text-center lg:text-left lg:items-center rounded-xl bg-[#4455daff]"
        style={{
          backgroundImage: `url(${returnAppropriateBgImg()})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="basis-full lg:max-w-[300px] mb-4 lg:mb-0">
          <span className="block mb-2 text-white text-2xl">
            <strong>{location}</strong>
          </span>
          <span className="block text-white">{date}</span>
        </div>
        <div className="mt-6 lg:mt-0 basis-full lg:max-w-[300px] flex flex-wrap items-center justify-around">
          <img src={weather.icon} alt="" className="w-[120px] h-[120px] " />
          <span className="text-7xl text-white">{weather.temperature}</span>
        </div>
      </div>
      <ForecastCube data={additionalInfo} />
    </div>
  );
};

export default TodayForecast;
