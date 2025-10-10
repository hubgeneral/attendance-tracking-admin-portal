import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import type { GraphQLError } from "graphql";

// ✅ Apollo v3.10+ compatible onError
const errorLink = onError((error) => {
  const { graphQLErrors, networkError } = error as unknown as {
    graphQLErrors?: readonly GraphQLError[];
    networkError?: Error;
  };

  if (graphQLErrors && Array.isArray(graphQLErrors)) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations
        )}, Path: ${path}`
      );
    });
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError.message}`);
  }
});

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_URL1 || "http://localhost:5015/graphql",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
  },
});

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
