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
  const { aboutSectionContainerRef } = useHomeContextProvider();

  return (
    <Container ref={aboutSectionContainerRef}>
      <LeftWrapper>
        <Heading>about me</Heading>
        <CirclePhoto width={233} />
      </LeftWrapper>
      <RightWrapper>
        <Paragraph>
          Hi I’m Donnie and I am passionate about everything that has to do with
          Digital Design and Art Direction. I enjoy working with agencies and
          enthusiastic people who want to solve problems through beautiful
          designs and experiences.
        </Paragraph>
      </RightWrapper>
    </Container>
  );
};
