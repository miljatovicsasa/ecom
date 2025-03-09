import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query GetCategories {
    category(id: 20) {
      products {
        total_count
        page_info {
          current_page
          page_size
        }
      }
      children_count
      children {
        id
        level
        name
        path
        children {
          id
          level
          name
          path
          children {
            id
            level
            name
            path
            children {
              id
              level
              name
              path
            }
          }
        }
      }
    }
  }
`;
