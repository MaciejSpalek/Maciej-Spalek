import React from "react";
import { format } from "date-fns";
import {
  HiddenWrapper,
  Container,
  Image,
  Title,
  DateText,
} from "./PostCard.styled";
import { IPostCard } from "types";

export const PostCard = ({ image, title, date }: IPostCard) => {
  const convertedDate = format(new Date(date), "dd/MM/yyyy");

  return (
    <Container>
      <Image src={image} alt={title} />
      <HiddenWrapper>
        <Title>{title}</Title>
        <DateText>{convertedDate}</DateText>
      </HiddenWrapper>
    </Container>
  );
};
