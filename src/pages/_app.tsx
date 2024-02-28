import React from "react";
import "../styles/globals.css";
import { LayoutRenderer } from "layouts/LayoutRenderer";

const App = ({ Component, pageProps }) => {
  return (
      <LayoutRenderer>
        <Component {...pageProps} />
      </LayoutRenderer>
  );
};

export default App;
