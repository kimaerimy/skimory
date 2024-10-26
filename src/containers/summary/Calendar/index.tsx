"use client";

import { getWeekDates } from "@/utils/week-calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import CalendarDate from "../CalendarDate";
import { useDateStore } from "@/store/date";
import { useDailyConditionStore } from "@/store/dailyCondition";
import { fetchDailyCondition } from "@/actions/dailyCondition";

export default function Calendar() {
  const { selectedDate, setSelectedDate } = useDateStore();
  const { conditions, setCondition, setConditionsRange } =
    useDailyConditionStore();

  const [calendarBaseDate, setCalendarBaseDate] = useState(dayjs(new Date()));
  const weekDates = getWeekDates(calendarBaseDate);

  const goToPreviousWeek = () => {
    setCalendarBaseDate((prevDate) => prevDate.subtract(1, "week"));
  };

  const goToNextWeek = () => {
    setCalendarBaseDate((prevDate) => prevDate.add(1, "week"));
  };

  useEffect(() => {
    const fetchData = async () => {
      let startDate = dayjs(calendarBaseDate)
        .startOf("week")
        .format("YYYY-MM-DD");
      let endDate = dayjs(calendarBaseDate).endOf("week").format("YYYY-MM-DD");
      const data = await fetchDailyCondition(startDate, endDate);
      if (data) {
        setConditionsRange(data);
      }
    };
    fetchData();
  }, [calendarBaseDate]);

  return (
    <div className="border rounded-xl bg-white shadow-sm p-4">
      <h1 className="text-2xl font-bold mb-4">{weekDates[0].format("M월")}</h1>
      <div className="">
        <table className="w-full">
          <thead>
            <tr className="flex gap-2 justify-between *:w-8 mb-1">
              <th scope="col"></th>
              {weekDates.map((date, i) => (
                <th
                  scope="col"
                  key={i}
                  className="font-normal text-sm text-slate-500"
                >
                  {date.format("ddd")}
                </th>
              ))}
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex gap-2 justify-between items-center">
              <td className="flex justify-center items-center w-8">
                <button
                  onClick={goToPreviousWeek}
                  className="rounded-md border text-sm font-medium transition-colors text-center"
                >
                  <ChevronLeft className="text-slate-800" />
                </button>
              </td>
              {weekDates.map((date, i) => (
                <td key={i} className="flex justify-center items-center">
                  <CalendarDate
                    date={date}
                    condition={
                      conditions
                        ? conditions[date.format("YYYY-MM-DD")]?.skin_condition
                        : ""
                    }
                  />
                </td>
              ))}
              <td className="flex justify-center items-center w-8">
                <button
                  onClick={goToNextWeek}
                  className="rounded-md border text-sm font-medium transition-colors"
                >
                  <ChevronRight className="text-slate-800" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
