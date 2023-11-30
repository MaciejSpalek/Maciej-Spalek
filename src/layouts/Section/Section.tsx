import React, { useEffect, useRef } from "react";
import { SectionProps } from "./Section.model";
import { Container, HeadingWrapper, Heading, Content } from "./Section.styled";
import { gsap } from "gsap";
import { animationParams } from "helpers";

export const Section = ({ title, children }: SectionProps) => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        y: -500,
        ease: "ease",
      },
      {
        y: 0,
        duration: animationParams.duration/2,
        delay: 0.25,
        ease: "ease",
      }
    );
  });

  return (
    <Container>
      <HeadingWrapper ref={headingRef}>
        <Heading>{title}</Heading>
      </HeadingWrapper>
      <Content>{children}</Content>
    </Container>
  );
};
