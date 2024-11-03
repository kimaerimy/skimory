'use client';

import { fetchProducts } from '@/actions/products';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import ProductListItem from './ProductListItem';

const ProductList = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(),
  });
  return (
    <div>
      <h2>화장품 리스트--</h2>
      <div>
        <Link
          href="/products/new"
          className="inline-block bg-blue-800 p-2 rounded-md text-white  "
        >
          화장품 등록하기
        </Link>
      </div>
      <ul className="flex flex-col gap-2">
        {products?.map((item, i) => <ProductListItem key={i} {...item} />)}
      </ul>
    </div>
  );
};

export default ProductList;
