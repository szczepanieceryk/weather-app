import React from 'react';
import searchIcon from '../assets/images/icon-search.svg';

interface HeaderProps {
  location: string;
  handleWeatherSearch: (e: React.FormEvent) => void;
  handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ location, handleWeatherSearch, handleLocationChange }) => {
  return (
    <div className="mt-[3rem] max-w-[95%] mx-auto flex flex-wrap justify-center text-center">
      <div className="mx-auto max-w-[250px] md:min-w-[1000px]">
        <h1 className="mb-[2rem] lg:mb-[4rem] basis-full text-white text-5xl">
          <strong>How&apos;s the sky looking today?</strong>
        </h1>
      </div>

      <form onSubmit={handleWeatherSearch} className="w-full mx-auto md:max-w-lg">
        <div className="flex flex-wrap lg:flex-nowrap items-center lg:gap-2">
          <div className="relative w-full lg:w-3/4">
            <img src={searchIcon} alt="" className="absolute top-3 left-3" />
            <label htmlFor="">
              <input
                type="search"
                placeholder="Search for a place..."
                className="p-2 pl-[3rem] rounded-md text-gray-300 bg-[#3d3b5eff] w-full"
                value={location}
                onChange={handleLocationChange}
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-2 lg:mt-0 p-2 block w-full lg:w-1/5 rounded-md bg-[#4455daff] text-white"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
