import React, { useEffect } from "react";
import "../styles/globals.css";
import { Main as MainLayout } from "layouts";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "services";

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
};

export default App;
