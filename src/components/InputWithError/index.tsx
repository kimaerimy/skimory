import { useEffect, useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const InputWithError = ({
  defaultValue,
  error,
  placeholder,
  ...props
}: Props) => {
  const [value, setValue] = useState(defaultValue);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setErrorMsg(null);
  };
  useEffect(() => {
    if (error) {
      setErrorMsg(`${placeholder}을 입력해주세요.`);
    } else {
      setErrorMsg(null);
    }
  }, [error]);

  return (
    <div>
      <input
        className={`${
          error && 'focus-visible:ring-red-500'
        } rounded-md py-2 px-4 bg-white text-slate-500 text-sm border border-slate-200 shadow-sm inline-flex items-center focus:outline-none focus:ring-2 focus-visible:ring-blue-800 disabled:opacity-50 disabled:pointer-events-none`}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        {...props}
      />
      <p className="text-sm text-red-500">{errorMsg}</p>
    </div>
  );
};

export default InputWithError;
