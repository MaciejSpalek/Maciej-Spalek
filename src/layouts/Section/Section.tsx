import { SkeletonList } from "components";
import React from "react";
import { SectionProps } from "./Section.model";

import { Container, HeadingWrapper, Heading, Content } from "./Section.styled";

export const Section = ({
  title,
  children,
  isLoading,
  icon: Icon,
}: SectionProps) => {
  console.log(isLoading);
  return (
    <Container>
      <HeadingWrapper>
        <Heading>{title}</Heading>
      </HeadingWrapper>
      <Content>
        {isLoading ? <SkeletonList elementsNumber={3} /> : children}
      </Content>
    </Container>
  );
};
