import createApolloClient from '@/lib/apollo-client';
import { gql } from '@apollo/client';
import PopularProducts from '@/components/homepage/PopularProducts';
import { Product } from '@/types/product';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import Carousel from '@/components/ui/Carousel';
import { promotionsInfo } from '@/data/promotions';
import PromotionButton from '@/components/ui/PromotionButton';
import { colors } from '@/theme/theme';

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

      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}
        >
          Save with Rebates and Promotions
        </Typography>
        <Carousel items={promotionsInfo} slidesToShow={3} />;
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}
        >
          Save Now With Our Promotions
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 2,
          }}
        >
          {/* Promotion 1*/}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
            }}
          >
            <Box
              component="img"
              src="/images/promotion_first_pic.jpg"
              alt="Promotion"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                bottom: 15,
                left: 0,
                backgroundColor: colors.secondary,
                color: '#000',
                padding: '5px 10px',
                width: '80%',
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                First Time Buyer
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                $5 OFF
              </Typography>
              <PromotionButton />
            </Box>
          </Box>
          {/* Promotion 2 */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
            }}
          >
            <Box
              component="img"
              src="/images/promotion_second_pic.jpg"
              alt="Promotion"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                bottom: 15,
                left: 0,
                backgroundColor: colors.secondary,
                color: '#000',
                padding: '5px 10px',
                width: '58%',
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                5% DISCOUNT FOR
              </Typography>

              <ul style={{ paddingLeft: 20, fontWeight: 'bold' }}>
                <li>Military</li>
                <li>Teachers</li>
                <li>First responders</li>
                <li>Medical staff</li>
              </ul>
            </Box>
          </Box>
          {/* Promotion 3 */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
            }}
          >
            <Box
              component="img"
              src="/images/promotion_third_pic.jpg"
              alt="Promotion"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            <Button
              variant="contained"
              sx={{
                position: 'absolute',
                bottom: '20px',
                left: '10%',
                backgroundColor: colors.secondary,
                color: colors.textPrimary,
                fontWeight: 'bold',
                borderRadius: 0,
                px: 4,
                py: 1,
                '&:hover': {
                  backgroundColor: colors.secondaryLighter,
                },
              }}
            >
              SHOP NOW
            </Button>
          </Box>
        </Box>
      </Container>

      {/* <PopularProducts products={data.products.items} /> */}
    </Box>
  );
}
