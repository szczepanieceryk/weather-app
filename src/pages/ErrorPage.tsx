import React from 'react';
import errorIcon from '../assets/images/icon-error.svg';
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
    </div>
  );
};

export default ErrorPage;
