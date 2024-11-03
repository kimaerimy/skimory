import ProductForm from '@/containers/products/ProductForm';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1 className="text-xl font-bold">화장품 상세 페이지</h1>
      <div>
        <ProductForm id={id} />
      </div>
    </div>
  );
}
