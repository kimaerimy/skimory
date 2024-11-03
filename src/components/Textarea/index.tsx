import { ChangeEvent, useState } from 'react';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({ defaultValue = '', ...props }: Props) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
    <textarea
      className="border"
      cols={80}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

export default Textarea;
