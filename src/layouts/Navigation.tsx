import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/images/logo.svg';
import unitsIcon from '../assets/images/icon-units.svg';
import dropdownIcon from '../assets/images/icon-dropdown.svg';

const Navigation: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const handleToggle = () => setOpen((v) => !v);

  return (
    <nav>
      <div className="p-4 md:py-8 max-w-[90%] mx-auto flex flex-wrap justify-between items-center">
        <img src={logo} alt="" />
        <div
          ref={wrapperRef}
          className="relative p-2 rounded-md bg-[#3d3b5eff] cursor-pointer select-none"
        >
          <button
            type="button"
            onClick={handleToggle}
            className="flex items-center text-white gap-2"
            aria-expanded={open}
            aria-haspopup="menu"
          >
            <img src={unitsIcon} alt="" className="inline" />
            <span className="inline mx-2">Units</span>
            <img src={dropdownIcon} alt="" className="inline-block" />
          </button>

          {open && (
            <div
              role="menu"
              className="absolute right-0 mt-5 p-2 w-64 bg-[#272541ff] border-2 border-[#3d3b5eff] text-white rounded-lg shadow-lg z-50"
            >
              <button
                className="w-[98%] mx-auto rounded-md text-left px-3 py-2 hover:bg-[#312f4bff]"
                role="menuitem"
              >
                Switch to Imperial
              </button>

              <div className="px-3 py-1 text-xs text-gray-500">Temperature</div>
              <button
                className="w-[98%] mx-auto rounded-md text-left px-3 py-2 hover:bg-[#312f4bff]"
                role="menuitem"
              >
                Celsius (°C)
              </button>
              <button
                className="w-[98%] mx-auto rounded-md text-left px-3 py-2 hover:bg-[#312f4bff]"
                role="menuitem"
              >
                Fahrenheit (°F)
              </button>

              <div className="border-t border-[#3d3b5eff]">
                <div className="px-3 py-1 text-xs text-gray-500">Wind Speed</div>
                <button
                  className="w-[98%] mx-auto rounded-md text-left px-3 py-2 hover:bg-[#312f4bff]"
                  role="menuitem"
                >
                  km/h
                </button>
                <button
                  className="w-[98%] mx-auto rounded-md text-left px-3 py-2 hover:bg-[#312f4bff]"
                  role="menuitem"
                >
                  mph
                </button>
              </div>

              <div className="border-t border-[#3d3b5eff]">
                <div className="px-3 py-1 text-xs text-gray-500">Precipitation</div>
                <button
                  className="w-[98%] mx-auto rounded-md text-left px-3 py-2 hover:bg-[#312f4bff]"
                  role="menuitem"
                >
                  Millimeters (mm)
                </button>
                <button
                  className="w-[98%] mx-auto rounded-md text-left px-3 py-2 hover:bg-[#312f4bff]"
                  role="menuitem"
                >
                  Inches (in)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
