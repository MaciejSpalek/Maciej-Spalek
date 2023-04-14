import React from "react";
import { Sections } from "components";
import { Container } from "./Home.styled";
import { Header, Projects } from "./components";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Projects />
      <Sections />
    </Container>
  );
};
