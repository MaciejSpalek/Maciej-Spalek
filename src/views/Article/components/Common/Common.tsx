import React from "react";
import { Container, Heading, ImageWrapper, Paragraph } from "./Common.styled";
import { IArticleCommonBlockType } from "types";
import Image from "next/image";

interface CommonProps {
  data: IArticleCommonBlockType;
}

export const Common = ({ data }: CommonProps) => {
  const { image, description, title } = data;

  return (
    <Container>
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
      <ImageWrapper>
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="image"
          loading="eager"
          priority
        />
      </ImageWrapper>
    </Container>
  );
};
