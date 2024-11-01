import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  name: string;
  value: string[];
  options: { [key: string]: string };
}

export const ConditionArea = ({ title, name, value, options }: Props) => {
  const [checkedTrouble, setCheckedTrouble] = useState<string[]>(value);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setCheckedTrouble((prevState) =>
      checked
        ? [...prevState, value]
        : prevState.filter((item) => item !== value)
    );
  };

  useEffect(() => {
    setCheckedTrouble(value);
  }, [value]);
  return (
    <fieldset className="border rounded-md p-4">
      <legend className="font-bold text-lg">{title}</legend>
      <div className="flex justify-around">
        <div>
          {Object.entries(options).map(([optName, optVal], i) => (
            <label key={i}>
              {optVal}
              <input
                type="checkbox"
                name={name}
                value={optName}
                onChange={handleCheckboxChange}
                checked={checkedTrouble.includes(optName)}
              />
            </label>
          ))}
        </div>
        <div>
          <div className="relative bg-red-200 rounded-full w-[100px] h-[115px]">
            <Image
              src={`/images/face.png`}
              alt="얼굴"
              width="300"
              height="343"
              loading="eager"
              style={{ width: "100%", height: "100%" }}
            />
            {checkedTrouble.includes("forehead") && (
              <div className="absolute top-[30px] right-[46px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
            )}
            {checkedTrouble.includes("glabella") && (
              <div className="absolute top-[47px] right-[46px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
            )}
            {checkedTrouble.includes("nose") && (
              <div className="absolute top-[68px] right-[46px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
            )}
            {checkedTrouble.includes("cheek") && (
              <>
                <div className="absolute top-[73px] right-[31px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
                <div className="absolute top-[73px] left-[27px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
              </>
            )}
            {checkedTrouble.includes("temple") && (
              <>
                <div className="absolute top-[53px] right-[13px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
                <div className="absolute top-[53px] left-[13px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
              </>
            )}
            {checkedTrouble.includes("chin") && (
              <div className="absolute bottom-[5px] left-[45px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
            )}
          </div>
        </div>
      </div>
    </fieldset>
  );
};
