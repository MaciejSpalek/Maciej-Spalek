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
import { FirstHeaderPhoto, SecondHeaderPhoto } from "assets";

import { useHeader } from "./useHeader";
export const Header = () => {
  const {
    rightImageRef,
    leftImageRef,
    containerRef,
    paragraphRef,
    headingRef,
    buttonRef,
    handleOnClick,
  } = useHeader();

  return (
    <Container ref={containerRef}>
      <Heading ref={headingRef}>Maciej Spałek</Heading>
      <Paragraph ref={paragraphRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua minim veniam, quis
        nostrud.
      </Paragraph>
      <div ref={buttonRef}>
        <SpecialButton onClick={handleOnClick}>Contact me</SpecialButton>
      </div>
      <GridList>
        <GridItem ref={leftImageRef}>
          <Image src={FirstHeaderPhoto} alt="Zdjęcie w windzie" />
        </GridItem>
        <GridItem ref={rightImageRef}>
          <Image src={SecondHeaderPhoto} alt="Zdjęcie na rzece Hudson" />
        </GridItem>
      </GridList>
    </Container>
  );
};
