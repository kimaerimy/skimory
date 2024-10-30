import { useEffect, useState } from "react";

interface Props {
  title: string;
  name: string;
  option: string[];
  value: string;
}
export const ConditionType = ({ title, name, option, value }: Props) => {
  const [conditionType, setConditionType] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConditionType(e.target.value);
  };

  useEffect(() => {
    setConditionType(value);
  }, [value]);

  return (
    <fieldset className="border rounded-md shadow-sm p-4">
      <legend className="text-lg font-bold">{title}</legend>
      <div>
        {option.map((item, i) => (
          <label key={i}>
            {item}
            <input
              type="radio"
              value={item}
              name={name}
              checked={conditionType === item}
              onChange={handleChange}
            />
          </label>
        ))}
      </div>
    </fieldset>
  );
};
