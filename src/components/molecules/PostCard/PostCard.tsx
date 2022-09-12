import React from "react";
import {
  HiddenWrapper,
  ImageWrapper,
  Container,
  Image,
  Title,
  DateText,
} from "./PostCard.styled";

interface IPostCard {
  id: string;
  image: string;
  title: string;
  date: Date;
  description: string;
}

export const PostCard = ({ image, title, date }: IPostCard) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>
      <HiddenWrapper>
        <Title>{title}</Title>
        <DateText>{date}</DateText>
      </HiddenWrapper>
    </Container>
  );
};
