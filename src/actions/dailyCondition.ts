"use server";

import { ImageSchema } from "@/schemas/images";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

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
      .from("daily_condition")
      .select("id, date, daily_condition")
      .gte("date", startDate)
      .lte("date", endDate ? endDate : startDate);

    const { data, error } = await query;
    if (error || data.length === 0) {
      return null;
    }
    return data;
  }
  return null;
};

export const upSertDailyCondition = async (_: any, formData: FormData) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const date = formData.get("date");

  const jsonData = {
    condition_type: String(formData.get("condition_type") ?? "good"),
    moisture_level: Number(formData.get("moisture_level") ?? 0),
    oil_level: Number(formData.get("oil_level") ?? 0),
    trouble: formData.getAll("trouble").map(String),
    sensitivity: formData.getAll("sensitivity").map(String),
    redness: formData.getAll("redness").map(String),
    imgUrl: formData.get("imgUrl") as string,
  };

  if (user) {
    const { data: existingData } = await supabase
      .from("daily_condition")
      .select("id, date, daily_condition")
      .eq("date", date)
      .single();

    let query;
    if (existingData) {
      query = supabase
        .from("daily_condition")
        .update({ daily_condition: jsonData })
        .eq("id", existingData.id);
    } else {
      query = supabase.from("daily_condition").insert([
        {
          date,
          daily_condition: jsonData,
        },
      ]);
    }
    const { data, error } = await query;

    if (error) {
      return {
        success: false,
        data: null,
      };
    }

    //redirect("/overview");
  }
  return {
    success: false,
    data: null,
  };
};
