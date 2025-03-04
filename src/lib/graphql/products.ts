import { gql } from '@apollo/client';

export const GET_POPULAR_PRODUCTS = gql`
  query GetPopularProducts {
    products(filter: { category_id: { in: ["5", "6", "7"] } }) {
      items {
        id
        name
        image {
          url
        }
        price {
          regularPrice {
            amount {
              value
              currency
            }
          }
        }
        url_key
      }
    }
  }
`;

export const GET_PRODUCT_BY_SKU = gql`
  query GetProductBySku($sku: String!) {
    products(filter: { sku: { eq: $sku } }) {
      items {
        id
        name
        sku
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
          label
        }
        configurable_options {
          attribute_code
          label
          values {
            value_index
            label
          }
        }
        custom_attributes {
          attribute_code
          value
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_URL = gql`
  query GetProductByUrl($urlKey: String!) {
    products(filter: { url_key: { eq: $urlKey } }) {
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
        description {
          html
        }
        image {
          url
        }
        configurable_options {
          attribute_code
          values {
            value_index
            label
          }
        }
        variants {
          product {
            id
            sku
            name
            price {
              regularPrice {
                amount {
                  value
                  currency
                }
              }
            }
            url_key
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_SPECIFICATIONS = gql`
  query GetProductSpecifications($sku: String!) {
    products(filter: { sku: { eq: $sku } }) {
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
        custom_attributes {
          attribute_code
          value
        }
      }
    }
  }
`;
