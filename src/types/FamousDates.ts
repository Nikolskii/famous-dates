export interface TimeIntervalType {
  start: number;
  end: number;
}

export interface HistoricalEventsType {
  year: number;
  event: string;
}

export interface FamousDatesType {
  title: string | null;
  stage: number;
  timeInterval: TimeIntervalType;
  historicalEvents: HistoricalEventsType[];
}
