import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: true, // Enables Server-Side Rendering
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_MAGENTO_GRAPHQL_URL, // Magento GraphQL endpoint
      headers: {
        "Content-Type": "application/json",
      },
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
