import Link from "next/link";

interface Props {
  title: string;
  link: string;
  children?: React.ReactNode;
}
export const NoData = ({ title, link }: Props) => {
  return (
    <div className="border rounded-md shadow-sm p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <p>등록된 데이터가 없습니다.</p>
        <div>
          <Link
            className="block bg-blue-800 p-2 rounded-md text-white"
            href={link}
          >
            기록하기
          </Link>
        </div>
      </div>
    </div>
  );
};
