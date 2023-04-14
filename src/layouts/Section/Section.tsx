import { SkeletonList } from "components";
import React from "react";
import { SectionProps } from "./Section.model";

import { Container, HeadingWrapper, Heading, Content } from "./Section.styled";

export const Section = ({ title, children, isLoading }: SectionProps) => {
  return (
    <Container>
      <HeadingWrapper>
        <Heading>{title}</Heading>
      </HeadingWrapper>
      <Content>
        {isLoading ? <SkeletonList elementsNumber={6} /> : children}
      </Content>
    </Container>
  );
};
