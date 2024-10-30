"use client";

import Calendar from "@/containers/overview/Calendar";
import { NoData } from "@/containers/overview/NoData";
import { useDateStore } from "@/store/date";
import { useDailyConditionStore } from "@/store/dailyCondition";
import { ConditionOverview } from "@/containers/overview/condition/ConditionOverview";

export default function Page() {
  const { selectedDate, setSelectedDate } = useDateStore();
  const { conditions } = useDailyConditionStore();

  return (
    <div className="flex flex-col gap-y-5">
      <section>
        <Calendar />
      </section>
      <section>
        {conditions && conditions[selectedDate] ? (
          <ConditionOverview />
        ) : (
          <NoData
            title="피부컨디션"
            link={`/daily/${selectedDate}/condition`}
          />
        )}
      </section>
    </div>
  );
}
