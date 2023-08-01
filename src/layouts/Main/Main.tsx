import React, { useEffect, useRef } from "react";

import { Navbar, Footer } from "./components";
import { Meta } from "components";

import { Container, InnerWrapper, MainWrapper } from "./Main.styled";

export const Main = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <Container>
      <InnerWrapper ref={containerRef}>
        <Meta />
        <Navbar />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </InnerWrapper>
    </Container>
  );
};
