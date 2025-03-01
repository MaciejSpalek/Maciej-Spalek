import React from "react";
import { Container, Heading, Paragraph } from "./Common.styled";
import { IArticleCommonBlockType } from "types";

interface CommonProps {
  data: IArticleCommonBlockType;
}

export const Common = ({ data }: CommonProps) => {
  const { image, description, title } = data;

  return (
    <Container>
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
    </Container>
  );
};
