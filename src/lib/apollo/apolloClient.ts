import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Disable certificate verification
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

let apolloClient: ApolloClient<any> | undefined;

// Create Apollo Client singleton instance
const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://magento.test/graphql',
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  });
};

// Export the Apollo Client or initialize it if not already created
const getApolloClient = () => {
  if (!apolloClient) {
    apolloClient = createApolloClient();
  }
  return apolloClient;
};

export default getApolloClient;
