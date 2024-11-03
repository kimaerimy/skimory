import ProductForm from '@/containers/products/ProductForm';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>화장품 등록하기</h1>
      <ProductForm id={id} />
    </div>
  );
}
