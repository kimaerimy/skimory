"use client";

import Button from "@/components/Button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function LogOut() {
  const router = useRouter();
  async function signOut() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    router.push("/auth/login");
  }

  return (
    <>
      <Button onClick={signOut}>로그아웃</Button>
    </>
  );
}
