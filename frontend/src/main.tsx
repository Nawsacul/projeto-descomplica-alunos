import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import SearchProvider from "./context/SearchContext";
import AppRoutes from "./routes/index";
import client from "./apollo/apolloClient";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <SearchProvider>
        <AppRoutes />
      </SearchProvider>
    </ApolloProvider>
  </React.StrictMode>
);
