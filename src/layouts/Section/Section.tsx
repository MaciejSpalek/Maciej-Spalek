import React from "react";
import { SectionProps } from "./Section.model";
import { Container, HeadingWrapper, Heading, Content } from "./Section.styled";

export const Section = ({ title, children }: SectionProps) => {
  return (
    <Container>
      <HeadingWrapper>
        <Heading>{title}</Heading>
      </HeadingWrapper>
      <Content>
        {children}
      </Content>
    </Container>
  );
};
