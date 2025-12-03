import React from 'react';
import searchIcon from '../assets/images/icon-search.svg';
const Header: React.FC = () => {
  return (
    <div className="mt-[3rem] max-w-[95%] mx-auto flex flex-wrap justify-center text-center">
      <h1 className="mb-[2rem] basis-full text-white text-5xl">
        How&apos;s the sky looking today?
      </h1>
      <form action="" className="w-full mx-auto md:max-w-lg">
        <div className="flex flex-wrap lg:flex-nowrap items-center lg:gap-2">
          <div className="relative w-full lg:w-3/4">
            <img src={searchIcon} alt="" className="absolute top-3 left-3" />
            <label htmlFor="">
              <input
                type="search"
                placeholder="Search for a place..."
                className="p-2 pl-[3rem] rounded-md bg-[#3d3b5eff] w-full"
              />
            </label>
          </div>
          <button className="mt-2 lg:mt-0 p-2 block w-full lg:w-1/5 rounded-md bg-[#4455daff] text-white">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
