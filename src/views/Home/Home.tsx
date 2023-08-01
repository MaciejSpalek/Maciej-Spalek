import React from "react";
import { Sections } from "components";
import { Container } from "./Home.styled";
import { Header, Newest } from "./components";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Newest />
      <Sections />
    </Container>
  );
};
