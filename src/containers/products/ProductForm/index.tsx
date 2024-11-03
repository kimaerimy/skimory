'use client';

import { fetchProduct, upsertProduct } from '@/actions/products';
import { useActionState, useEffect, useRef, useState } from 'react';
import { PRODUCT_CATEGORIES } from '@/constants/products';
import { useQuery } from '@tanstack/react-query';
import ProductEvaluation from './ProductEvaluation';
import Button from '@/components/Button';
import InputWithError from '@/components/InputWithError';
import Textarea from '@/components/Textarea';

const ProductForm = ({ id }: { id: string }) => {
  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
  });
  const [selectedMainCategory, setSelectedMainCategory] =
    useState<string>('CLEANSING');
  const [error, setError] = useState<string>('');
  const [formState, formAction, isPending] = useActionState(
    upsertProduct,
    null,
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMainCategory(e.target.value);
  };

  useEffect(() => {
    if (formState && !formState.success) {
      console.log(formState.error);
      setError(formState.error);
    }
  }, [formState]);

  return (
    <form action={formAction}>
      <h2>{product?.product_name}</h2>
      <div> 선택된 값 : {selectedMainCategory}</div>
      <select name="main_category" onChange={handleChange}>
        <option value="" disabled>
          카테고리
        </option>
        {Object.entries(PRODUCT_CATEGORIES).map(([key, { label }]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
      <select name="sub_category">
        <option value="" disabled>
          종류
        </option>
        {selectedMainCategory &&
          Object.entries(
            PRODUCT_CATEGORIES[selectedMainCategory].subCategories,
          ).map(([subKey, subLabel]) => (
            <option key={subKey} value={subKey}>
              {subLabel}
            </option>
          ))}
      </select>
      <div>
        <label htmlFor="product_name">상품명</label>
      </div>
      <InputWithError
        type="text"
        name="product_name"
        placeholder="상품명"
        id="product_name"
        defaultValue={product?.product_name ?? ''}
        error={!!error}
      />
      <ProductEvaluation
        mainCategory={selectedMainCategory}
        defaultValue={product?.product_evaluation ?? {}}
      />
      <div>
        <Textarea
          name="product_review"
          defaultValue={product?.product_review}
        />
      </div>
      <Button disabled={isPending}>{product ? `수정` : `등록`}</Button>
    </form>
  );
};

export default ProductForm;
