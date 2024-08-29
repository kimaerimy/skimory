export default async function Page({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const { day } = await params;
  // 정보 가져오기
  return <>{day} log 상세 페이지</>;
}
