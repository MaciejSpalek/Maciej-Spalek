import React from "react";
import { format } from "date-fns";
import {
  HiddenWrapper,
  ImageWrapper,
  Container,
  DateText,
  Image,
  Title,
} from "./ProjectCard.styled";
import { IProjectCard } from "types";

export const ProjectCard = ({ image, title, date }: IProjectCard) => {
  const convertedDate = format(new Date(date), "dd/MM/yyyy");

  return (
    <Container>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>
      <HiddenWrapper>
        <Title>{title}</Title>
        <DateText>{convertedDate}</DateText>
      </HiddenWrapper>
    </Container>
  );
};
