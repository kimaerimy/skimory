"use client";

import {
  fetchDailyCondition,
  upSertDailyCondition,
} from "@/actions/dailyCondition";
import { useActionState, useEffect, useState } from "react";
import dayjs from "dayjs";
import { useDailyConditionStore } from "@/store/dailyCondition";
import { ConditionType } from "./ConditionType";
import { ConditionLevel } from "./ConditionLevel";
import { ConditionArea } from "./ConditionArea";
import { ConditionImageUpload } from "./ConditionImageUpload";

export const ConditionForm = ({ date }: { date: string }) => {
  const conditions = useDailyConditionStore((state) => state.conditions);
  const setCondition = useDailyConditionStore((state) => state.setCondition);
  const [formState, formAction, isPending] = useActionState(
    upSertDailyCondition,
    null
  );
  const [imgUrl, setImgUrl] = useState<string>(conditions[date]?.imgUrl ?? "");
  const conditionsByDate = conditions[date] ?? {
    condition_type: "good",
    moisture_level: 0,
    oil_level: 0,
    trouble: [],
    sensitivity: [],
    redness: [],
    imgUrl: "",
  };

  const skinAreaOptions = {
    forehead: "이마",
    cheek: "볼",
    nose: "코",
    chin: "턱",
    glabella: "미간",
    temple: "관자놀이",
  };

  useEffect(() => {
    if (formState && formState.success) {
      if (formState.data) {
        setCondition(date, formState.data);
      }
    }
  }, [formState]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDailyCondition(date);
      if (data) {
        setCondition(date, data[0].daily_condition);
        setImgUrl(data[0].daily_condition.imgUrl);
      }
    };
    if (!conditions[date]) {
      fetchData();
    }
  }, [conditions]);

  return (
    <form action={formAction}>
      <input type="hidden" name="date" value={date} />
      <input type="hidden" name="imgUrl" value={imgUrl} />
      <div className="flex flex-col gap-y-4">
        <ConditionType
          title="오늘의 피부컨디션 등록하기"
          name="condition_type"
          option={["good", "bad", "normal"]}
          value={conditionsByDate.condition_type}
        />
        <ConditionLevel
          title="수분량"
          name="moisture_level"
          value={conditionsByDate.moisture_level}
        />
        <ConditionLevel
          title="유분량"
          name="oil_level"
          value={conditionsByDate.oil_level}
        />
        <ConditionArea
          title="트러블"
          name="trouble"
          options={skinAreaOptions}
          value={conditionsByDate.trouble}
        />
        <ConditionArea
          title="자극도"
          name="sensitivity"
          options={skinAreaOptions}
          value={conditionsByDate.sensitivity}
        />
        <ConditionArea
          title="홍조"
          name="redness"
          options={skinAreaOptions}
          value={conditionsByDate.redness}
        />
        <ConditionImageUpload imgUrl={imgUrl} setImgUrl={setImgUrl} />
        <div>
          <button
            type="submit"
            className="p-2 bg-blue-800 text-white rounded-md"
            disabled={isPending}
          >
            {conditions[date] ? "수정하기" : "등록하기"}
          </button>
        </div>
      </div>
    </form>
  );
};
