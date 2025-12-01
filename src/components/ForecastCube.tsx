import React from 'react';
const ForecastCube: React.FC = () => {
  return (
    <div className="max-w-[95%] lg:max-w-[60%] mx-auto mt-6 flex flex-wrap justify-center lg:justify-afound gap-4 ">
      <div className="p-4 min-w-[150px] max-w-200px] rounded-lg bg-[#3d3b5eff] text-white">
        <span className="mb-4 block">Feels like</span>
        <span className="block text-3xl">64C</span>
      </div>

      <div className="p-4 min-w-[150px] max-w-200px] rounded-lg bg-[#3d3b5eff] text-white">
        <span className="mb-4 block">Humidity</span>
        <span className="block text-3xl">46%</span>
      </div>

      <div className="p-4 min-w-[150px] max-w-200px] rounded-lg bg-[#3d3b5eff] text-white">
        <span className="mb-4 block">Wind</span>
        <span className="block text-3xl">9mph</span>
      </div>

      <div className="p-4 min-w-[150px] max-w-200px] rounded-lg bg-[#3d3b5eff] text-white">
        <span className="mb-4 block">Precipitation</span>
        <span className="block text-3xl">0 in</span>
      </div>
    </div>
  );
};

export default ForecastCube;
