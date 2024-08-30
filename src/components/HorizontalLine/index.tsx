export default function HorizontalLine({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t"></span>
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-white px-2 text-slate-400">{children}</span>
      </div>
    </div>
  );
}
