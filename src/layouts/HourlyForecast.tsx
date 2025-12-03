import React from 'react';
import HourForecast from '../components/HourForecast';
import { HourForecastProps } from '../types/types';
import sunbIcon from '../assets/images/icon-sunny.webp';
import cloudyIcon from '../assets/images/icon-partly-cloudy.webp';
import rainIcon from '../assets/images/icon-rain.webp';
import fogIcon from '../assets/images/icon-fog.webp';
import overcastIcon from '../assets/images/icon-overcast.webp';

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
  {
    weather: overcastIcon,
    hour: '7PM',
    temperature: '18',
  },
  {
    weather: fogIcon,
    hour: '8PM',
    temperature: '18',
  },
  {
    weather: overcastIcon,
    hour: '9PM',
    temperature: '17',
  },
  {
    weather: rainIcon,
    hour: '10PM',
    temperature: '17',
  },
];
const HourlyForecast: React.FC = () => {
  return (
    <div className="min-w-[350px] max-w-[95%] sm:max-w-md p-3 mx-auto rounded-xl bg-[#272541ff]">
      <div className="flex flex-wrap justify-between">
        <span className="block mt-2 mb-4 text-white">
          <strong>Hourly forecast</strong>
        </span>

        <select name="" id="" className="p-3 rounded-xl text-white bg-[#312f4bff] cursor-pointer">
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
      </div>

      <div>{forecastData?.map?.((forecast, i) => <HourForecast key={i} {...forecast} />)}</div>
    </div>
  );
};

export default HourlyForecast;
