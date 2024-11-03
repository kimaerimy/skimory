import { fetchProducts } from '@/actions/products';
import ProductList from '@/containers/products/ProductList';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  return (
    <div className="flex flex-col gap-y-5">
      <section>
        <h1>화장품 리스트</h1>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductList />
        </HydrationBoundary>
      </section>
    </div>
  );
}
