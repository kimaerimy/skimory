export interface DailyInfo {
  id: number;
  date: string;
  daily_condition: DailyCondition;
  daily_care?: {};
  daily_eats?: {};
}

export interface DailyCondition {
  skin_condition: string;
  moisture_level: number;
  oil_level: number;
  trouble: {
    [key: string]: boolean;
  };
  sensitivity: {
    [key: string]: number;
  };
  redness: {
    [key: string]: number;
  };
}
