import React from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { Meta } from "components";
import { Container, InnerWrapper, MainWrapper } from "./Dashboard.styled";

gsap.registerPlugin(ScrollTrigger);

export const Dashboard = ({ children }) => (
  <Container>
    <InnerWrapper>
      <Meta />
      <MainWrapper>{children}</MainWrapper>
    </InnerWrapper>
  </Container>
);
