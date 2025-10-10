import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "rsuite/dist/rsuite-no-reset.min.css";
import "./index.css";
import { ApolloProvider } from "@apollo/client/react";
import App from "./App.tsx";
import client from "./apolloClient.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
