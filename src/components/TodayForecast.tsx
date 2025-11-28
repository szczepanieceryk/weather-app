import React from 'react';
import mobileBgImg from '../assets/images/bg-today-small.svg';
import sunIcon from '../assets/images/icon-sunny.webp';
const TodayForecast: React.FC = () => {
  return (
    <div
      className="max-w-xs md:max-w-2xl mx-auto mt-[3rem] py-[3rem] px-2 flex flex-wrap justify-center text-center rounded-xl bg-[#4455daff]"
      style={{
        backgroundImage: `url(${mobileBgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="basis-full mb-4 ">
        <span className="block mb-2 text-white text-2xl">
          <strong>Berlin, Germany</strong>
        </span>
        <span className="block text-white">Tuesday, Aug 5,2025</span>
      </div>
      <div className="mt-6 basis-full flex flex-wrap items-center justify-around">
        <img src={sunIcon} alt="" className="w-[120px] h-[120px] " />
        <span className="text-7xl text-white">68C</span>
      </div>
    </div>
  );
};

export default TodayForecast;
