import React from "react";
import { format } from "date-fns";
import {
  HiddenWrapper,
  ImageWrapper,
  Container,
  DateText,
  Title,
} from "./PostCard.styled";
import { IPostCard } from "types";
import Image from "next/image";

export const PostCard = ({ image, title, date }: IPostCard) => {
  const convertedDate = format(new Date(date), "dd/MM/yyyy");

  return (
    <Container>
      <ImageWrapper>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <HiddenWrapper>
        <Title>{title}</Title>
        <DateText>{convertedDate}</DateText>
      </HiddenWrapper>
    </Container>
  );
};
