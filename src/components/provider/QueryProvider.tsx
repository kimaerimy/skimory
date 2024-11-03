"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/apis/getQueryClient";
import type { PropsWithChildren } from "react";

export default function QueryProvider({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
