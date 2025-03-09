'use server'; // Server Action

import createApolloClient from '@/lib/apollo-client';
import { gql } from '@apollo/client';

const ADD_TO_CART = gql`
  mutation AddToCart($cartId: String!, $productId: Int!, $quantity: Int!) {
    addSimpleProductsToCart(
      input: {
        cart_id: $cartId
        cart_items: [{ sku: $productId, quantity: $quantity }]
      }
    ) {
      cart {
        items {
          id
          quantity
        }
      }
    }
  }
`;

export async function addToCart(
  cartId: string,
  productId: number,
  quantity: number,
) {
  const client = createApolloClient();

  try {
    const { data } = await client.mutate({
      mutation: ADD_TO_CART,
      variables: { cartId, productId, quantity },
    });

    return data.addSimpleProductsToCart.cart.items;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw new Error('Failed to add product to cart.');
  }
}
