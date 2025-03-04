import { gql } from '@apollo/client';

export const ADD_TO_CART = gql`
  mutation AddToCart($cartId: String!, $sku: String!, $quantity: Int!) {
    addSimpleProductsToCart(
      input: {
        cart_id: $cartId
        cart_items: [{ sku: $sku, quantity: $quantity }]
      }
    ) {
      cart {
        items {
          id
          product {
            name
            price {
              regularPrice {
                amount {
                  value
                  currency
                }
              }
            }
          }
          quantity
        }
      }
    }
  }
`;

export const GET_CART = gql`
  query GetCart($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      items {
        id
        product {
          name
          price {
            regularPrice {
              amount {
                value
                currency
              }
            }
          }
        }
        quantity
      }
      prices {
        grand_total {
          value
          currency
        }
      }
    }
  }
`;

export const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($cartId: String!, $cartItemId: Int!) {
    removeItemFromCart(input: { cart_id: $cartId, cart_item_id: $cartItemId }) {
      cart {
        id
        items {
          id
          product {
            name
          }
        }
      }
    }
  }
`;

export const UPDATE_CART_ITEM = gql`
  mutation UpdateCartItem(
    $cartId: String!
    $cartItemId: Int!
    $quantity: Int!
  ) {
    updateCartItems(
      input: {
        cart_id: $cartId
        cart_items: [{ cart_item_id: $cartItemId, quantity: $quantity }]
      }
    ) {
      cart {
        id
        items {
          id
          quantity
          product {
            name
          }
        }
      }
    }
  }
`;
