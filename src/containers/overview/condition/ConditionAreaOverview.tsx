import Image from "next/image";

interface Props {
  title: string;
  name: string;
  value: string[];
}

export const ConditionAreaOverview = ({ title, name, value }: Props) => {
  return (
    <div className="flex flex-col border rounded-sm p-2 flex-1">
      <div className="border p-2 flex justify-center items-center">
        <div
          className={`relative rounded-full overflow-hidden w-[100px] h-[115px]`}
        >
          <Image
            src={`/images/face.png`}
            alt="얼굴"
            width="300"
            height="343"
            priority
            style={{ width: "100%", height: "100%" }}
          />
          {value.includes("forehead") && (
            <div className="absolute top-[30px] right-[46px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
          )}
          {value.includes("glabella") && (
            <div className="absolute top-[47px] right-[46px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
          )}
          {value.includes("nose") && (
            <div className="absolute top-[68px] right-[46px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
          )}
          {value.includes("cheek") && (
            <>
              <div className="absolute top-[73px] right-[31px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
              <div className="absolute top-[73px] left-[27px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
            </>
          )}
          {value.includes("temple") && (
            <>
              <div className="absolute top-[53px] right-[13px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
              <div className="absolute top-[53px] left-[13px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
            </>
          )}
          {value.includes("chin") && (
            <div className="absolute bottom-[5px] left-[45px] bg-red-400 w-[10px] h-[10px] rounded-full"></div>
          )}
        </div>
      </div>
      <h2 className="text-lg font-semibold text-center">{title}</h2>
    </div>
  );
};
