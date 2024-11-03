import { useEffect, useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = ({ defaultValue = '', error, ...props }: Props) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <input
      className={`${
        error && 'focus-visible:ring-red-500'
      } rounded-md py-2 px-4 bg-white text-slate-500 text-sm border border-slate-200 shadow-sm inline-flex items-center focus:outline-none focus:ring-2 focus-visible:ring-blue-800 disabled:opacity-50 disabled:pointer-events-none`}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

export default Input;
