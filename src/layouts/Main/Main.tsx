import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { Navbar, Footer } from "./components";
import { Container, InnerWrapper, MainWrapper } from "./Main.styled";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Main = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    containerRef?.current?.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <Container>
      <Navbar />
      <InnerWrapper ref={containerRef}>
        <MainWrapper>{children}</MainWrapper>
      </InnerWrapper>
      <Footer />
    </Container>
  );
};
