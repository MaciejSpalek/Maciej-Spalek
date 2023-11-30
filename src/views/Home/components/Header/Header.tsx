import React from "react";
import {
  Container,
  Heading,
  GridList,
  GridItem,
  Paragraph,
} from "./Header.styled";
import Image from "next/image";
import { useHeader } from "./useHeader";
import { SpecialButton } from "components";
import { FirstHeaderPhoto, SecondHeaderPhoto } from "assets";
import { useHomeContextProvider } from "views/Home/context/HomeContextProvider";

export const Header = () => {
  const { handleOnClick } = useHeader();

  const {
    headerRightImageRef,
    headerContainerRef,
    headerLeftImageRef,
    headerParagraphRef,
    headerHeadingRef,
    headerButtonRef,
  } = useHomeContextProvider();

  return (
    <Container ref={headerContainerRef}>
      <Heading ref={headerHeadingRef}>Maciej Spałek</Heading>
      <Paragraph ref={headerParagraphRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua minim veniam, quis
        nostrud.
      </Paragraph>
      <div ref={headerButtonRef}>
        <SpecialButton onClick={handleOnClick}>Contact me</SpecialButton>
      </div>
      <GridList>
        <GridItem ref={headerLeftImageRef}>
          <Image src={FirstHeaderPhoto} alt="Zdjęcie w windzie" />
        </GridItem>
        <GridItem ref={headerRightImageRef}>
          <Image src={SecondHeaderPhoto} alt="Zdjęcie na rzece Hudson" />
        </GridItem>
      </GridList>
    </Container>
  );
};
