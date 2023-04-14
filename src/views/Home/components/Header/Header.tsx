import React from "react";
import {
  Container,
  HeadingWrapper,
  Heading,
  ImageWrapper,
  Paragraph,
} from "./Header.styled";
import { logo } from "assets/images";
import Image from "next/image";
import { Socials } from "components";

export const Header = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image quality={100} loading="eager" src={logo} alt="logo" priority />
      </ImageWrapper>
      <HeadingWrapper>
        <Heading>Maciej Spałek</Heading>
        <Paragraph>PORTFOLIO</Paragraph>
        <Socials />
      </HeadingWrapper>
    </Container>
  );
};
