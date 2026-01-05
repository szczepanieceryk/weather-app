import React from 'react';
import logo from '../assets/images/logo.svg';
import unitsIcon from '../assets/images/icon-units.svg';
import dropdownIcon from '../assets/images/icon-dropdown.svg';

const Navigation: React.FC = () => {
  return (
    <nav>
      <div className="p-4 md:py-8 max-w-[90%] mx-auto flex flex-wrap justify-between items-center">
        <img src={logo} alt="" />
        <div className="p-2 rounded-md bg-[#3d3b5eff] cursor-pointer">
          <img src={unitsIcon} alt="" className="inline" />
          <label htmlFor="units-select-id" className="inline mx-2 text-white inline-block">
            Units
            <select name="" id="units-select-id" className="hidden">
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
          <img src={dropdownIcon} alt="" className="inline-block" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
