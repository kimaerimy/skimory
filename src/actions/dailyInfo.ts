"use server";

import { DailyInfo } from "@/types/daily";
import { createClient } from "@/utils/supabase/server";

export async function dailyInfoActions() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data, error } = await supabase
      .from("daily_info")
      .select("id, date, daily_condition, daily_care, daily_eats")
      .returns<DailyInfo[]>();

    if (data) {
      const groupedData = data.reduce<Record<string, DailyInfo>>(
        (acc, item) => {
          acc[item.date] = item;
          return acc;
        },
        {}
      );
      return groupedData;
    }
  }
  return null;
}
