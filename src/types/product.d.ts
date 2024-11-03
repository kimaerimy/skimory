interface ProductCategories {
  [key: string]: {
    label: string;
    subCategories: {
      [key: string]: string;
    };
  };
}
interface Product {
  id: number;
  product_name: string;
  main_category: string;
  sub_category: string;
  product_review: string;
  product_evaluation: {
    [key: string]: number;
  };
}

interface ProductListItem {
  id: number;
  product_name: string;
  main_category: string;
  sub_category: string;
  product_review: string;
  product_evaluation: {
    [key: string]: number;
  };
}

interface ProductEvaluationOptionItem {
  label: string;
  type: string;
}

interface ProductEvaluationOption {
  [key: string]: {
    [key: string]: ProductEvaluationOptionItem;
  };
}
