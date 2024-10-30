import { useDateStore } from "@/store/date";
import Link from "next/link";
import { ConditionLevelOverview } from "./ConditionLevelOverview";
import { ConditionAreaOverview } from "./ConditionAreaOverview";
import { useDailyConditionStore } from "@/store/dailyCondition";

export const ConditionOverview = () => {
  const { selectedDate } = useDateStore();
  const { conditions } = useDailyConditionStore();
  return (
    <div className="border rounded-xl bg-white shadow-sm p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">피부 컨디션</h1>
        <Link
          className="block bg-blue-800 p-2 rounded-md text-white"
          href={`/daily/${selectedDate}/condition`}
        >
          수정하기
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ConditionLevelOverview
          title="수분"
          name="moisture_level"
          color="blue"
          value={conditions[selectedDate].moisture_level}
        />
        <ConditionLevelOverview
          title="유분"
          name="oil_level"
          color="yellow"
          value={conditions[selectedDate].oil_level}
        />
        <ConditionAreaOverview
          title="트러블"
          name="trouble"
          value={conditions[selectedDate].trouble}
        />
        <ConditionAreaOverview
          title="홍조"
          name="redness"
          value={conditions[selectedDate].redness}
        />
        <ConditionAreaOverview
          title="민감도"
          name="sensitivity"
          value={conditions[selectedDate].sensitivity}
        />
      </div>
    </div>
  );
};
