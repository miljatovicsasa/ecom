import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query GetCategories {
    categoryList {
      id
      name
      children {
        id
        name
      }
    }
  }
`;
