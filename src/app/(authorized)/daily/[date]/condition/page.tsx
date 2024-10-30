import { ConditionForm } from "@/containers/daily/condition/ConditionForm";

export default async function Page({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  return <ConditionForm date={date} />;
}
