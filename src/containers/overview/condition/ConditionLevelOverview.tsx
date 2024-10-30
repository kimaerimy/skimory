interface Props {
  title: string;
  name: string;
  value: number;
  color: string;
}

const getLevelText = (value: number, type: "moisture_level" | "oil_level") => {
  const data = {
    moisture_level: [
      { range: [80, 100], text: "매우 촉촉함" },
      { range: [60, 79], text: "촉촉함" },
      { range: [40, 59], text: "보통" },
      { range: [20, 39], text: "건조함" },
      { range: [0, 19], text: "매우 건조함" },
    ],
    oil_level: [
      { range: [80, 100], text: "매우 기름짐" },
      { range: [60, 79], text: "기름짐" },
      { range: [40, 59], text: "보통" },
      { range: [20, 39], text: "건조함" },
      { range: [0, 19], text: "매우 건조함" },
    ],
  };
  const arr = data[type];
  for (let item of arr) {
    if (value >= item.range[0] && value <= item.range[1]) {
      return item.text;
    }
  }
};

export const ConditionLevelOverview = ({
  title,
  name,
  value,
  color,
}: Props) => {
  const ceilValue =
    value == 100 ? 900 : value == 0 ? 100 : Math.ceil(value / 10) * 100;
  const bg = `bg-${color}-${ceilValue}`;
  const text = getLevelText(value, name as "moisture_level" | "oil_level");

  return (
    <div className="flex flex-col justify-center border rounded-sm p-2">
      <div className="border p-2">
        <div className={`${bg} text-white font-bold text-center`}>{value}</div>
        <div className="text-center">
          <span className="text-sm">{text}</span>
        </div>
      </div>
      <h2 className="text-lg font-semibold text-center">{title}</h2>
    </div>
  );
};
