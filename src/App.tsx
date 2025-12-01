import React from 'react';
import Navigation from './layouts/Navigation';
import Header from './layouts/Header';
import TodayForecast from './components/TodayForecast';
import DailyForecast from './layouts/DailyForecast';
import HourlyForecast from './layouts/HourlyForecast';
const App = () => {
  return (
    <div className="pb-[4rem] bg-[#03012dff]">
      <Navigation />
      <Header />
      <TodayForecast />
      <DailyForecast />
      <HourlyForecast />
    </div>
  );
};

export default App;
