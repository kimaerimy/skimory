import { DailyCondition, DailyInfo } from "@/types/daily";
import { create } from "zustand";

interface DailyConditionStore {
  conditions: Record<string, DailyCondition>;
  setCondition: (date: string, data: DailyCondition) => void;
  setConditionsRange: (data: DailyInfo[]) => void;
}

export const useDailyConditionStore = create<DailyConditionStore>((set) => ({
  conditions: {},
  setCondition: (date, data) =>
    set((state) => ({
      conditions: { ...state.conditions, [date]: { ...data } },
    })),
  setConditionsRange: (data) =>
    set((state) => {
      const newConditions = { ...state.conditions };
      data.forEach((item) => {
        newConditions[item.date] = item.daily_condition;
      });
      return { conditions: newConditions };
    }),
}));
