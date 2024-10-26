export default function ButtonOutline({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-md py-2 px-4 
      text-sm font-medium text-slate-800
      border border-slate-200
      shadow-sm
      transition-colors
      duration-300
     bg-white hover:bg-slate-100
      focus:outline-none
      focus-visible:ring-2
      focus-visible:ring-blue-800
      disabled:opacity-50
      disabled:pointer-events-none`}
      {...props}
    >
      {children}
    </button>
  );
}
