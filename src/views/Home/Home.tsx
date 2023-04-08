import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Container } from "./Home.styled";
import { Projects, Sections } from "./components";
import { GET_PROJECTS_QUERY } from "queries/projectQuery";
import { convertProjects } from "helpers";

export const Home = () => {
  const router = useRouter();

  // const openModal = (id: string) => {
  //   router.query.photo = id;
  //   router.push(router);
  // };

  return (
    <Container>
      <Sections />
    </Container>
  );
};
