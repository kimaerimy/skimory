export interface DailyInfo {
  id: number;
  date: string;
  daily_condition: DailyCondition;
  daily_care?: {};
  daily_eats?: {};
}

export interface DailyCondition {
  condition_type: string;
  moisture_level: number;
  oil_level: number;
  trouble: string[];
  sensitivity: string[];
  redness: string[];
  imgUrl: string;
}
