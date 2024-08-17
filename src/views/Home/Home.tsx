import React from "react";
import { HomeContextProvider } from "./context/HomeContextProvider";
import { About, Header } from "./components";
import { Container } from "./Home.styled";
import { Sections } from "components";
import { IHome as IHomeData, ISection } from "types";

interface IHome {
  data: {
    home: IHomeData;
    crafts: ISection[];
  };
}

export const Home = ({ data }: IHome) => {
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
