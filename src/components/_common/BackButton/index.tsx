"use client";

import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return <button onClick={goBack}>뒤로가기</button>;
};
