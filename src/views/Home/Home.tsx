import React from "react";
import { HomeContextProvider } from "./context/HomeContextProvider";
import { About, Header } from "./components";
import { Container } from "./Home.styled";
import { Sections } from "components";

export const Home = ({ data }) => {
  const { home, crafts } = data || {};

  return (
    <HomeContextProvider home={home}>
      <Container>
        <Header />
        <About />
        <Sections sections={crafts} />
      </Container>
    </HomeContextProvider>
  );
};
