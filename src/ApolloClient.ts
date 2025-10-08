import { ApolloClient,ApolloLink, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";


const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_URL1 ,
});


const authLink = new ApolloLink((operation, forward) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');

  // Use the setContext method to set the HTTP headers.
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }));

  // Call the next link in the middleware chain.
  return forward(operation);
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
