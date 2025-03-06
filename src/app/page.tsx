import createApolloClient from '@/lib/apollo-client';
import { gql } from '@apollo/client';
import PopularProducts from '@/components/homepage/PopularProducts';
import { Product } from '@/types/product';
import { Box, Container, Link, Typography } from '@mui/material';
import Carousel from '@/components/ui/Carousel';

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
  // const { data } = await client.query<{ products: { items: Product[] } }>({
  //   query: GET_PRODUCTS,
  // });

  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 'auto',
          width: '100%',
        }}
        alt="Hero"
        src="/images/hero.jpg"
      />

      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}
        >
          Save with Rebates and Promotions
        </Typography>
      </Container>

      <Container maxWidth="lg">
        <Carousel />
      </Container>

      {/* <PopularProducts products={data.products.items} /> */}
    </Box>
  );
}
