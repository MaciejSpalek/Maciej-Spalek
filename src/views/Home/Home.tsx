import { About, Header } from "./components";
import { Container } from "./Home.styled";
import { Button, Sections } from "components";
import React, { useEffect } from "react";
import { HomeContextProvider } from "./context/HomeContextProvider";
import { axiosInstance } from "services/axiosClient";

export const Home = ({ sections }) => {
  // const createAboutSectionData = async () =>
  //   await axiosInstance.post("/about-section/create", {
  //     description: "duuuupa",
  //   });

  // const getAboutSectionData = async () =>
  //   await axiosInstance.get("/about-section/get");

  // const create = () => createAboutSectionData();
  // const get = () => getAboutSectionData();

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
