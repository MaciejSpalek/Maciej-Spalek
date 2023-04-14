import React from "react";

import { Navbar, Footer } from "./components";
import { Meta } from "components";

import { Container, InnerWrapper, MainWrapper } from "./Main.styled";

export const Main = ({ children }) => {
  return (
    <Container>
      <InnerWrapper>
        <Meta />
        <Navbar />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </InnerWrapper>
    </Container>
  );
};
