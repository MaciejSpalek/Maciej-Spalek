import React from "react";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "services";
import { LayoutRenderer } from "layouts/LayoutRenderer";

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <LayoutRenderer>
        <Component {...pageProps} />
      </LayoutRenderer>
    </ApolloProvider>
  );
};

export default App;
