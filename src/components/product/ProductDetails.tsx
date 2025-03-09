'use client';

import { useQuery } from '@apollo/client';
import ProductCarousel from '@/components/product/ProductCarousel';
import ProductOptions from '@/components/product/ProductOptions';
import ProductSpecifications from '@/components/product/ProductSpecifications';
import AddToCartButton from '@/components/product/AddToCartButton';
import { GET_PRODUCT_BY_URL } from '@/lib/queries/products';

interface ProductDetailsProps {
  urlKey: string;
}

export default function ProductDetails({ urlKey }: ProductDetailsProps) {
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_URL, {
    variables: { urlKey },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product.</p>;

  const product = data?.products?.items[0];

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <ProductCarousel images={[product.image.url]} />
      <h1>{product.name}</h1>
      <p>
        Price: {product.price.regularPrice.amount.value}{' '}
        {product.price.regularPrice.amount.currency}
      </p>

      <ProductOptions
        configurableOptions={product.configurable_options || []}
        onSelectOption={(option) => console.log('Selected option:', option)}
      />

      <ProductSpecifications specifications={product.custom_attributes} />

      <AddToCartButton product={product} />
    </div>
  );
}
