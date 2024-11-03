import { useEffect, useState } from 'react';
import { PRODUCT_EVALUATION_OPTION_DATA } from '@/constants/products';

interface Props {
  mainCategory: string;
  defaultValue?: Record<string, number>;
}

const ProductEvaluation = ({
  mainCategory,
  defaultValue = { irritation: 0 },
}: Props) => {
  const [ratings, setRatings] = useState<{ [key: string]: number }>(
    defaultValue,
  );
  const handleRating = (category: string, value: number) => {
    setRatings((prev) => ({ ...prev, [category]: value }));
  };

  useEffect(() => {
    setRatings(defaultValue);
  }, [JSON.stringify(defaultValue)]);

  return (
    <div className="p-4 space-y-4">
      {Object.entries(PRODUCT_EVALUATION_OPTION_DATA[mainCategory]).map(
        ([key, value]) => (
          <div key={key} className="flex items-center space-x-4">
            <span className="w-40">{value.label}</span>
            <input
              type="hidden"
              name={`product_evaluation[${key}]`}
              value={ratings[key] ?? 0}
            />
            {[1, 2, 3, 4, 5].map((num) => (
              <input
                type="button"
                key={num}
                className={`border rounded-full w-5 h-5 ${
                  ratings[key] >= num
                    ? value.type === 'POSITIVE'
                      ? 'bg-blue-300'
                      : 'bg-red-300'
                    : 'bg-gray-200'
                }`}
                onClick={() => handleRating(key, num)}
              />
            ))}
            {ratings[key]}
          </div>
        ),
      )}
    </div>
  );
};

export default ProductEvaluation;
