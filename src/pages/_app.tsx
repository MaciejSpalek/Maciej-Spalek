import React, { ReactNode } from "react";
import "../styles/globals.css";
import { LayoutRenderer } from "layouts/LayoutRenderer";

interface IApp<P extends Record<string, unknown> = {}> {
  Component: React.ComponentType<P>;
  pageProps: P;
}

const App = <P extends Record<string, unknown>>({
  Component,
  pageProps,
}: IApp<P>): ReactNode => {
  return (
    <LayoutRenderer>
      <Component {...pageProps} />
    </LayoutRenderer>
  );
};

export default App;
