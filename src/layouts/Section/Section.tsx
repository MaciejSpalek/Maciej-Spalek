import React, { useLayoutEffect, useRef } from "react";
import { SectionProps } from "./Section.model";
import { Container, HeadingWrapper, Heading, Content } from "./Section.styled";
import { gsap } from "gsap";
import { animationParams } from "helpers";

export const Section = ({ title, children }: SectionProps) => {
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          y: "+=100",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Container>
      <HeadingWrapper ref={headingRef}>
        <Heading>{title}</Heading>
      </HeadingWrapper>
      <Content>{children}</Content>
    </Container>
  );
};
