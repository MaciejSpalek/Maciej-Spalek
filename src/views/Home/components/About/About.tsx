import React from "react";
import { CirclePhoto } from "components";
import {
  RightWrapper,
  LeftWrapper,
  Container,
  Paragraph,
  Heading,
} from "./About.styled";
import { useHomeContextProvider } from "views/Home/context/HomeContextProvider";

export const About = () => {
  const { aboutSectionContainerRef, about } = useHomeContextProvider();

  return (
    <Container ref={aboutSectionContainerRef}>
      <LeftWrapper>
        <Heading>About me</Heading>
        <CirclePhoto width={233} />
      </LeftWrapper>
      <RightWrapper>
        <Paragraph>{about.description}</Paragraph>
      </RightWrapper>
    </Container>
  );
};
