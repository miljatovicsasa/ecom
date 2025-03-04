import ProductDetails from '@/components/product/ProductDetails';

interface ProductPageProps {
  params: { url_key: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  return <ProductDetails urlKey={params.url_key} />;
}
