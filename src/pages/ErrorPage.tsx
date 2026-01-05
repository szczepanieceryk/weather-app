import React from 'react';
import errorIcon from '../assets/images/icon-error.svg';
import retryIcon from '../assets/images/icon-retry.svg';

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center text-center max-w-lg mx-auto">
      <img src={errorIcon} alt="" className="basis-full w-10 h-10" />
      <h1 className="my-3 text-4xl text-white">
        <strong>Somnething went wrong</strong>
      </h1>
      <p className="text-[#aeaeb7ff] max-w-md">
        We couldn`t connect to the server (API error). Please try again in a few moments
      </p>

      <button className="mt-5 p-3 rounded-md bg-[#272541ff] text-white">
        <img className="inline-block mr-2" src={retryIcon} alt="" />
        <span className="inline-block">Retry</span>
      </button>
    </div>
  );
};

export default ErrorPage;
