import React from "react";
import { CirclePhoto } from "components";
import { useAbout } from "./useAbout";
import {
  RightWrapper,
  LeftWrapper,
  Container,
  Paragraph,
  Heading,
} from "./About.styled";

export const About = () => {
  const { leftBoxRef, rightBoxRef } = useAbout();

  return (
    <Container>
      <LeftWrapper ref={leftBoxRef}>
        <Heading>about me</Heading>
        <CirclePhoto width={233} />
      </LeftWrapper>
      <RightWrapper ref={rightBoxRef}>
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
