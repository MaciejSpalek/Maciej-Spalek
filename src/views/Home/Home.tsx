import { About, Header } from "./components";
import { Container } from "./Home.styled";
import { Sections } from "components";
import React from "react";
import { HomeContextProvider } from "./context/HomeContextProvider";

export const Home = ({ sections }) => {
  return (
    <HomeContextProvider>
      <Container>
        <Header />
        <About />
        <Sections sections={sections} />
      </Container>
    </HomeContextProvider>
  );
};
