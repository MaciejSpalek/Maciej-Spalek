import React, { ReactNode } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { Container, InnerWrapper, MainWrapper } from "./Dashboard.styled";
import { IChildren } from "types";

gsap.registerPlugin(ScrollTrigger);

export const Dashboard = ({ children }: IChildren) => (
  <Container>
    <InnerWrapper>
      <MainWrapper>{children}</MainWrapper>
    </InnerWrapper>
  </Container>
);
