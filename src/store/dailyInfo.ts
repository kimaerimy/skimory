import { DailyInfo } from "@/types/daily";
import { create } from "zustand";

interface DailyInfoStore {
  dailyInfo: Record<string, DailyInfo> | null;
  setDailyInfo: (date: string, dailyInfo: DailyInfo) => void;
  setInitialDailyInfo: (data: Record<string, DailyInfo>) => void;
}
export const useDailyInfoStore = create<DailyInfoStore>((set) => ({
  dailyInfo: null,
  setDailyInfo: (date, data) =>
    set((state) => ({ dailyInfo: { ...state.dailyInfo, [date]: data } })),
  setInitialDailyInfo: (data) => set({ dailyInfo: data }),
}));
