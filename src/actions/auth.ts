"use server";

import { AuthSchema } from "@/schemas/auth";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function signUpAction(_: any, formData: FormData) {
  const validateFields = AuthSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return {
      success: false,
      error: "올바른 이메일과 비밀번호를 입력해주세요.",
    };
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: validateFields.data.email,
    password: validateFields.data.password,
  });

  if (error) {
    if (error.code == "user_already_exists") {
      return { success: false, error: "이미 가입된 이메일입니다." };
    }
    return { success: false, error: error.message };
  }

  // 가입 성공 후, login
  const { data: signInData, error: signInError } =
    await supabase.auth.signInWithPassword({
      email: validateFields.data.email,
      password: validateFields.data.password,
    });

  redirect("/skinlog");
  return { data, success: true };
}

export async function logInAction(_: any, formData: FormData) {
  const validateFields = AuthSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return {
      success: false,
      error: "올바른 이메일과 비밀번호를 입력해주세요.",
    };
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: validateFields.data.email,
    password: validateFields.data.password,
  });

  if (error) {
    return {
      email: validateFields.data.email,
      success: false,
      error: "올바른 이메일과 비밀번호를 입력해주세요.",
    };
  }

  redirect("/skinlog");
  return { data, success: true };
}
