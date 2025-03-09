'use client';

import { Product } from '@/types/product';
import { gql, useQuery } from '@apollo/client';
import { CircularProgress } from '@mui/material';

const GET_POPULAR_PRODUCTS = gql`
  query GetPopularProducts {
    products(filter: { category_id: { eq: "4" } }) {
      items {
        id
        name
        price {
          regularPrice {
            amount {
              value
              currency
            }
          }
        }
        image {
          url
        }
      }
    }
  }
`;

export default function PopularProducts({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4">
          <img
            src={product.image.url}
            alt={product.name}
            className="w-full h-32 object-cover"
          />
          <h3 className="text-sm">{product.name}</h3>
          <p>
            {product.price.regularPrice.amount.value}{' '}
            {product.price.regularPrice.amount.currency}
          </p>
        </div>
      ))}
    </div>
  );
}
