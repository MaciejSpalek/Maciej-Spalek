import React from "react";
import { Container, HiddenWrapper, Image } from "./PostCard.styled";
interface IPostCard {
  image: string;
}

export const PostCard = ({ image }: IPostCard) => {
  return (
    <Container>
      <Image src={image} alt={"image"} />
      <HiddenWrapper>Perspektywa 1/7</HiddenWrapper>
    </Container>
  );
};
