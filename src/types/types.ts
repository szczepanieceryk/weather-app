export interface DailyForecastCellProps {
  id: number;
  day: string;
  weatherIcon: string;
  temperature: { day: string; night: string };
}

export interface HourForecastProps {
  weather: string;
  hour: string;
  temperature: string;
}

export interface TodayForecastProps {
  location: string;
  date: string;
  weather: { icon: string; temperature: string };
  additionalInfo: { feels: string; humidity: string; wind: string; precipitation: string };
}

export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    wind_speed_10m: number;
  };
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    wind_speed_10m: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    wind_speed_10m: number[];
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
  };
}
