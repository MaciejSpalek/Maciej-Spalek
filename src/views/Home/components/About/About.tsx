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
  const { description } = about;

  return (
    <Container ref={aboutSectionContainerRef}>
      <LeftWrapper>
        <Heading>About me</Heading>
        <CirclePhoto width={233} />
      </LeftWrapper>
      <RightWrapper>
        <Paragraph>{description}</Paragraph>
      </RightWrapper>
    </Container>
  );
};
