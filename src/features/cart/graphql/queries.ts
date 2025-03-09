// src/features/cart/graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cart {
      id
      items {
        productId
        quantity
        price
      }
    }
  }
`;
