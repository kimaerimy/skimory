import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  weekdays: ["일", "월", "화", "수", "목", "금", "토"],
});

export const getWeekDates = (date: string | Date | dayjs.Dayjs) => {
  const startOfWeek = dayjs(date).startOf("week");
  return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
};
