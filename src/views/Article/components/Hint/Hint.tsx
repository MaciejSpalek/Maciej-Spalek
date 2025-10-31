import React from "react";
import { Container, Heading, Paragraph } from "./Hint.styled";
import { IArticleHintBlockType } from "types";

interface HintProps {
  data: IArticleHintBlockType;
}

export const Hint = ({ data }: HintProps) => {
  const { description } = data;

  return (
    <Container>
      <Heading>Hint</Heading>
      <Paragraph>{description}</Paragraph>
    </Container>
  );
};
