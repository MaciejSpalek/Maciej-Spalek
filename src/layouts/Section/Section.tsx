import React, { useLayoutEffect, useRef } from "react";
import { SectionProps } from "./Section.model";
import { Container, HeadingWrapper, Heading, Content } from "./Section.styled";
import { gsap } from "gsap";
import { animationParams } from "helpers";
import { useIsMobileView } from "hooks";

export const Section = ({ title, children }: SectionProps) => {
  const isMobileView = useIsMobileView();
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    if (!isMobileView) {
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
    }
  }, [isMobileView]);

  return (
    <Container>
      <HeadingWrapper ref={headingRef}>
        <Heading>{title}</Heading>
      </HeadingWrapper>
      <Content>{children}</Content>
    </Container>
  );
};
