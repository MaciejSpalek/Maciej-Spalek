import React from "react";
import {
  HiddenWrapper,
  ImageWrapper,
  Container,
  Title,
} from "./PostCard.styled";
import { IPostCard } from "types";
import Image from "next/image";

export const PostCard = ({ image, title }: IPostCard) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </ImageWrapper>
      <HiddenWrapper>{title && <Title>{title}</Title>}</HiddenWrapper>
    </Container>
  );
};
