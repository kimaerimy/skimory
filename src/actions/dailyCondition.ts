"use server";

import { createClient } from "@/utils/supabase/server";

export const fetchDailyCondition = async (
  startDate: string,
  endDate?: string
) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    let query = supabase
      .from("daily_info")
      .select("id, date, daily_condition")
      .gte("date", startDate);

    if (endDate) {
      query = query.lte("date", endDate);
    }

    const { data, error } = await query;

    if (error) {
      console.error(error);
      return null;
    }
    return data;
  }
  return null;
};
