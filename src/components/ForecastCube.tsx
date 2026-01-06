import React from 'react';
interface ForecastProps {
  data: { feels: string; humidity: string; wind: string; precipitation: string };
}
const ForecastCube: React.FC<ForecastProps> = ({ data }) => {
  return (
    <div className="max-w-[95%] mx-auto mt-6 flex flex-wrap justify-center lg:justify-afound gap-4 ">
      <div className="p-4 min-w-[150px] max-w-200px] rounded-lg bg-[#3d3b5eff] text-white">
        <span className="mb-4 block text-gray-400">Feels like</span>
        <span className="block text-3xl">{data.feels}</span>
      </div>

      <div className="p-4 min-w-[150px] max-w-200px] rounded-lg bg-[#3d3b5eff] text-white">
        <span className="mb-4 block text-gray-400">Humidity</span>
        <span className="block text-3xl">{data.humidity}</span>
      </div>

      <div className="p-4 min-w-[150px] max-w-200px] rounded-lg bg-[#3d3b5eff] text-white">
        <span className="mb-4 block text-gray-400">Wind</span>
        <span className="block text-3xl">{data.wind}</span>
      </div>

      <div className="p-4 min-w-[150px] max-w-200px] rounded-lg bg-[#3d3b5eff] text-white">
        <span className="mb-4 block text-gray-400">Precipitation</span>
        <span className="block text-3xl">{data.precipitation}</span>
      </div>
    </div>
  );
};

export default ForecastCube;
