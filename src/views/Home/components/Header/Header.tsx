import React from "react";
import {
  Container,
  Heading,
  GridList,
  GridItem,
  Paragraph,
} from "./Header.styled";
import Image from "next/image";
import { SpecialButton } from "components";
import { useRouter } from "next/router";
import { FirstHeaderPhoto, SecondHeaderPhoto } from "assets";

export const Header = () => {
  const { push } = useRouter();

  const handleOnClick = () => push("/contact");

  return (
    <Container>
      <Heading>Maciej Spałek</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua minim veniam, quis
        nostrud.
      </Paragraph>
      <SpecialButton onClick={handleOnClick}>Contact me</SpecialButton>
      <GridList>
        <GridItem>
          <Image src={FirstHeaderPhoto} alt="Zdjęcie w windzie" />
        </GridItem>
        <GridItem>
          <Image src={SecondHeaderPhoto} alt="Zdjęcie na rzece Hudson" />
        </GridItem>
      </GridList>
    </Container>
  );
};
