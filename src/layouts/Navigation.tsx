import React from 'react';
import logo from '../assets/images/logo.svg';
import unitsIcon from '../assets/images/icon-units.svg';
const Navigation: React.FC = () => {
  return (
    <nav>
      <div className="p-4 flex flex-wrap justify-between items-center">
        <img src={logo} alt="" />
        <div className="p-2 rounded-md bg-[#3d3b5eff] cursor-pointer">
          <img src={unitsIcon} alt="" className="inline" />
          <label htmlFor="units-select-id" className="inline ml-2">
            Units
            <select name="" id="units-select-id" className="">
              <option value=""></option>
              <option value="">Switch to Imperial</option>
              <optgroup label="Temperature">
                <option value="">Celsius (°C)</option>
                <option value="">Fahrenheit (°F)</option>
              </optgroup>

              <optgroup label="Wind Speed">
                <option value="">km/h</option>
                <option value="">mph</option>
              </optgroup>

              <optgroup label="Precipitation">
                <option value="">Millimeters (mm)</option>
                <option value="">Inches (in)</option>
              </optgroup>
            </select>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
