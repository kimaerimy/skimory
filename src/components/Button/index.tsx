export default function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-md py-2 px-4 
      text-white text-sm font-medium
      transition-colors
      bg-blue-900 hover:bg-blue-900/70
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
