import { useDateStore } from "@/store/date";
import dayjs from "dayjs";

interface Props {
  date: dayjs.Dayjs;
  condition?: string;
}

export default function CalendarDate({ date, condition }: Props) {
  const { selectedDate, setSelectedDate } = useDateStore();
  const handleClick = () => {
    setSelectedDate(date.format("YYYY-MM-DD"));
  };

  return (
    <div className="flex flex-col">
      <button
        className={`inline-flex flex-col items-center justify-center w-8 h-8 p-0 rounded-md ${
          date.isSame(dayjs(selectedDate), "day")
            ? "bg-slate-800 text-white"
            : "bg-white text-black"
        } hover:bg-slate-100`}
        onClick={handleClick}
      >
        {date.format("D")}
      </button>
      <div className="flex justify-center items-center mt-2">
        {condition === "bad" ? (
          <span className="flex h-2 w-2 rounded-full bg-red-600"></span>
        ) : condition === "good" ? (
          <span className="flex h-2 w-2 rounded-full bg-green-600"></span>
        ) : condition === "normal" ? (
          <span className="flex h-2 w-2 rounded-full bg-yellow-600"></span>
        ) : (
          <span className="flex h-2 w-2 rounded-full bg-white"></span>
        )}
      </div>
    </div>
  );
}
