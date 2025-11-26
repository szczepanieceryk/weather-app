import React from 'react';
import Navigation from './layouts/Navigation';
import Header from './layouts/Header';
import TodayForecast from './components/TodayForecast';
import ForecastCube from './components/ForecastCube';

const App = () => {
  return (
    <div className="bg-[#03012dff]">
      <Navigation />
      <Header />
      <TodayForecast />
      <ForecastCube />
    </div>
  );
};

export default App;
