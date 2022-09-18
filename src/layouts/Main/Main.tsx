import React from "react";

import { Navbar, Footer } from "./components";
import { Meta } from "components";

import { Container, InnerWrapper } from "./Main.styled";

export const Main = ({ children }) => {
  return (
    <Container>
      <InnerWrapper>
        <Meta />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </InnerWrapper>
    </Container>
  );
};
