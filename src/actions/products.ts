"use server";

import { createClient } from "@/utils/supabase/server";

export const fetchProduct = async (id: string): Promise<Product | null> => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    const { data, error } = await supabase
      .from("user_product_list")
      .select(
        "id, main_category, sub_category, product_name, product_review, product_evaluation"
      )
      .eq("id", id)
      .returns<Product>()
      .single();
    if (error) {
      return null;
    }
    return data;
  }
  return null;
};

export const fetchProducts = async (): Promise<ProductListItem[] | null> => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    const { data, error } = await supabase
      .from("user_product_list")
      .select(
        `id, main_category, sub_category, product_name, product_review, product_evaluation`
      )
      .returns<ProductListItem[]>();
    if (error) {
      return null;
    }
    return data;
  }
  return null;
};

export const upsertProduct = async (_: any, formData: FormData) => {
  if (formData.get("product_name") === "") {
    return {
      success: false,
      error: "상품명을 입력해주세요",
    };
  }

  const evalData: Record<string, number> = {};
  for (const [key, value] of formData.entries()) {
    if (key.startsWith("product_evaluation[")) {
      const category = key.replace(/^product_evaluation\[(.+)\]$/, "$1");
      evalData[category] = Number(value);
    }
  }
  console.log(evalData);
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    const { data, error } = await supabase.from("user_product_list").upsert({
      product_name: formData.get("product_name") as string,
      main_category: formData.get("main_category") as string,
      sub_category: formData.get("sub_category") as string,
      product_review: formData.get("product_review") as string,
      product_evaluation: evalData,
    });
    if (error) {
      console.error(error);
    }
    return data;
  }
};
