import Rating from '@/components/Rating';
import {
  PRODUCT_CATEGORIES,
  PRODUCT_EVALUATION_OPTION_DATA,
} from '@/constants/products';

const ProductListItem = ({
  id,
  product_name,
  product_review,
  product_evaluation,
  main_category,
  sub_category,
}: ProductListItem) => {
  return (
    <li className="border rounded-sm">
      <h3 className="font-bold">{product_name}</h3>
      <p>
        {PRODUCT_CATEGORIES[main_category]?.label} /{' '}
        {PRODUCT_CATEGORIES[main_category]?.subCategories[sub_category]}
      </p>
      <p>{product_review}</p>
      <div>
        {Object.entries(product_evaluation).map(([key, value]) => (
          <div key={key} className="flex items-center">
            <span className="w-[80px] mr-2">
              {PRODUCT_EVALUATION_OPTION_DATA[main_category][key].label}
            </span>
            <Rating
              value={value}
              className={
                PRODUCT_EVALUATION_OPTION_DATA[main_category][key]?.type ===
                'POSITIVE'
                  ? 'bg-blue-400'
                  : 'bg-red-400'
              }
            />
          </div>
        ))}
      </div>
    </li>
  );
};

export default ProductListItem;
