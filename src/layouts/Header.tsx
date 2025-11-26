import React from 'react';
import searchIcon from '../assets/images/icon-search.svg';
const Header: React.FC = () => {
  return (
    <div className="mt-[3rem] flex flex-wrap justify-center text-center">
      <h1 className="mb-[3rem] block text-white text-5xl">How&apos;s the sky looking today?</h1>
      <form action="" className="w-full max-w-xs">
        <div className="relative">
          <img src={searchIcon} alt="" className="absolute top-3 left-3" />
          <label htmlFor="">
            <input
              type="search"
              placeholder="Search for a place..."
              className="p-2 pl-[3rem] rounded-md bg-[#3d3b5eff] w-full"
            />
          </label>
        </div>
        <button className="mt-2 p-2 block w-full rounded-md bg-[#4455daff] text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
