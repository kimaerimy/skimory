interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export default function Input({ error, ...props }: Props) {
  return (
    <input
      className={`rounded-md py-2 px-4 bg-white text-slate-500
      text-sm
      border border-slate-200 shadow-sm
      inline-flex items-center
      focus:outline-none
      focus:ring-2
      focus-visible:ring-blue-800
      disabled:opacity-50
      disabled:pointer-events-none
      ${error && "focus-visible:ring-red-500"}`}
      {...props}
    />
  );
}
