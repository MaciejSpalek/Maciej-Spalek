import React from "react";
import { About, Header, Newest, Sections } from "./components";
import { Container } from "./Home.styled";

export const Home = ({ sections }) => {
  return (
    <Container>
      <Header />
      <About />
      <Sections sections={sections}/>
    </Container>
  );
};
