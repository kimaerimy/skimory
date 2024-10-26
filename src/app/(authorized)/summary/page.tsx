"use client";

import Calendar from "@/containers/summary/Calendar";
import { useDateStore } from "@/store/date";

export default function Page() {
  const { selectedDate, setSelectedDate } = useDateStore();

  return (
    <div className="flex flex-col gap-y-5">
      <section>
        <Calendar />
      </section>
    </div>
  );
}
