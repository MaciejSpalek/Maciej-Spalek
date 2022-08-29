import React from "react";

import { Navbar, Footer } from "./components";
import { Meta } from "components";

import { Container } from "./Main.styled";

export const Main = ({ children }) => {
  return (
    <Container>
      <Meta />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
