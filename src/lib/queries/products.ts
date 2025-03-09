import { gql } from '@apollo/client';


export const GET_POPULAR_PRODUCTS = gql`
  query {
  products(
    filter: {}  
    pageSize: 15
  ) {
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
      }
      rating_summary
    }
  }
}

`;

export const PRODUCT_QUERY = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      description
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
`;

export const GET_PRODUCT_DETAIL = gql`
  query GetProductDetail($sku: String!) {
    products(filter: { sku: { eq: $sku } }) {
      items {
        name
        sku
        url_key
        stock_status
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
        media_gallery {
          url
          label
        }
        categories {
          name
          url_key
        }
        description {
          html
        }
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

