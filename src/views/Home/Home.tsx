import React from "react";
import { Sections } from "components";
import { Container } from "./Home.styled";
import { Header, Newest, Projects } from "./components";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Projects />
      <Newest />
      <Sections />
    </Container>
  );
};
