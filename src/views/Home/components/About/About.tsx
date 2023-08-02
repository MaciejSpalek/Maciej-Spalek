import React from "react";
import {
  Container,
  Heading,
  Paragraph,
  LeftWrapper,
  ImageWrapper,
  RightWrapper,
} from "./About.styled";

export const About = () => {
  return (
    <Container>
      <LeftWrapper>
        <Heading>about me</Heading>
        <ImageWrapper />
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
