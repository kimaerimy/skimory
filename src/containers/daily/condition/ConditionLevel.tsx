import { useEffect, useState } from "react";

interface Props {
  title: string;
  name: string;
  value: number;
}

export const ConditionLevel = ({ title, value, name }: Props) => {
  const [level, setLevel] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(parseInt(e.target.value, 10));
  };

  useEffect(() => {
    setLevel(value);
  }, [value]);

  return (
    <fieldset className="border rounded-md shadow-sm p-4">
      <legend className="font-bold text-lg">{title}</legend>
      <div>
        <label htmlFor="rangeInput">
          값: <output id="rangeValue">{level}</output>
        </label>
        <input
          type="range"
          id="rangeInput"
          min="0"
          max="100"
          name={name}
          value={level}
          onChange={handleChange}
        />
        {/* <input
          type="range"
          min="0"
          max="100"
          className="w-full h-4 rounded-lg appearance-none cursor-pointer bg-gradient-to-r 
    from-green-500 to-gray-300 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
    [&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:rounded-full 
    [&::-webkit-slider-thumb]:appearance-none"
        /> */}
      </div>
    </fieldset>
  );
};
