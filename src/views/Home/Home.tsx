import { About, Header } from "./components";
import { Container } from "./Home.styled";
import { Sections } from "components";
import React from "react";
import { HomeContextProvider } from "./context/HomeContextProvider";

export const Home = ({ data }) => {
  return (
    <HomeContextProvider data={data}>
      <Container>
        <Header />
        <About />
        <Sections sections={data.sections} />
      </Container>
    </HomeContextProvider>
  );
};
