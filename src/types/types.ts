export interface DailyForecastCellProps {
  id: number;
  day: string;
  weatherIcon: string;
  temperature: { day: string; night: string };
}
