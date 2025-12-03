import React from 'react';
import Navigation from './layouts/Navigation';
import Header from './layouts/Header';
import TodayForecast from './components/TodayForecast';
import DailyForecast from './layouts/DailyForecast';
import HourlyForecast from './layouts/HourlyForecast';
import sunIcon from './assets/images/icon-sunny.webp';
const App = () => {
  return (
    <div className="pb-[4rem] bg-[#03012dff]">
      <Navigation />
      <Header />
      <div className="lg:grid lg:grid-cols-3 lg:mt-[3rem] lg:max-w-6xl lg:mx-auto justify-items-center">
        <div className="lg:col-span-2">
          <TodayForecast
            location="Berlin, Germany"
            date="Tuesday, Aug 5,2025"
            weather={{ icon: sunIcon, temperature: '68C' }}
          />
          <DailyForecast />
        </div>
        <HourlyForecast />
      </div>
    </div>
  );
};

export default App;
