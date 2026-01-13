import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import type { GraphQLError } from "graphql";
import Cookies from "js-cookie";

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

const getAccessToken = () => {
  if (typeof window === "undefined") {
    return "";
  }

  try {
    return Cookies.get("accessToken") ?? "";
  } catch (error) {
    console.error("Failed to read access token from cookies:", error);
    return "";
  }
};

const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_URL1 || "http://localhost:5015/graphql",
});

const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
