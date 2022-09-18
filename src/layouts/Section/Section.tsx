import React from "react";

import { Container, HeadingWrapper, Heading, Content } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <Container>
      <HeadingWrapper>
        <Heading>{title}</Heading>
      </HeadingWrapper>
      <Content>{children}</Content>
    </Container>
  );
};
