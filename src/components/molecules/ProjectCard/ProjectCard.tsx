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

interface IProjectCard {
  id: string;
  image: string;
  title: string;
  date: Date;
}

interface IProps {
  data: IProjectCard;
}

export const ProjectCard = ({ data }: IProps) => {
  const { image, title, date } = data || {};
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
