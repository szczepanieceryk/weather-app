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
