import createApolloClient from '@/lib/apollo-client';
import { gql } from '@apollo/client';
import PopularProducts from '@/components/homepage/PopularProducts';
import { Product } from '@/types/product';

const GET_PRODUCTS = gql`
  query GetProducts {
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

export default async function HomePage() {
  const client = createApolloClient();
  const { data } = await client.query<{ products: { items: Product[] } }>({
    query: GET_PRODUCTS,
  });

  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <PopularProducts products={data.products.items} />
    </div>
  );
}
