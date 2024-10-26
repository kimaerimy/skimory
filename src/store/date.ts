import dayjs from "dayjs";
import { create } from "zustand";

interface DateStore {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

export const useDateStore = create<DateStore>((set) => ({
  selectedDate: dayjs(new Date()).format("YYYY-MM-DD"),
  setSelectedDate: (date) => set({ selectedDate: date }),
}));
