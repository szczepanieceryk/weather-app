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

  current_weather: {
    time: string;
    temperature: number;
    windspeed: number;
    winddirection?: number;
    weathercode?: number;
  };

  current_weather_units?: {
    temperature?: string;
    windspeed?: string;
    winddirection?: string;
  };

  hourly: {
    time: string[];
    temperature_2m: number[];
    relativehumidity_2m: number[];
    windspeed_10m: number[];
  };

  hourly_units: {
    time: string;
    temperature_2m: string;
    relativehumidity_2m: string;
    windspeed_10m: string;
  };
}
