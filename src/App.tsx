import React from 'react';
import Navigation from './layouts/Navigation';
import Header from './layouts/Header';
import TodayForecast from './components/TodayForecast';
import ForecastCube from './components/ForecastCube';
import DailyForecast from './layouts/DailyForecast';
import HourlyForecast from './layouts/HourlyForecast';
const App = () => {
  return (
    <div className="bg-[#03012dff]">
      <Navigation />
      <Header />
      <TodayForecast />
      <ForecastCube />
      <DailyForecast />
      <HourlyForecast />
    </div>
  );
};

export default App;
