import React from "react";
import {
  HiddenWrapper,
  ImageWrapper,
  Container,
  Image,
  Title,
  Date,
} from "./ProjectCard.styled";

interface IProjectCard {
  id: string;
  image: string;
  title: string;
  createdAt: Date;
}

interface IProps {
  data: IProjectCard;
}

export const ProjectCard = ({ data }: IProps) => {
  const { image, title, createdAt } = data || {};

  return (
    <Container>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>
      <HiddenWrapper>
        <Title>{title}</Title>
        <Date>{createdAt}</Date>
      </HiddenWrapper>
    </Container>
  );
};
