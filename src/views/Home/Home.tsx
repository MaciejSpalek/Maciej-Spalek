import React from "react";
import { About, Header, Newest } from "./components";
import { Sections } from "components";
import { Container } from "./Home.styled";

export const Home = () => {
  return (
    <Container>
      <Header />
      <About />
      <Newest />
      <Sections />
    </Container>
  );
};
