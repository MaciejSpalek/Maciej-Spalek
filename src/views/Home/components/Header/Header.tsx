import React from "react";
import {
  Container,
  HeadingWrapper,
  Heading,
  GridList,
  GridItem,
  Paragraph,
} from "./Header.styled";
import Image from "next/image";
import { SpecialButton } from "components";
import { useRouter } from "next/router";

export const Header = () => {
  const { push } = useRouter();

  const handleOnClick = () => push("/contact");

  return (
    <Container>
      <HeadingWrapper>
        <Heading>Maciej Spałek</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam, quis nostrud.
        </Paragraph>
        <SpecialButton onClick={handleOnClick}>Contact me</SpecialButton>
        {/* <GridList>
          <GridItem></GridItem>
          <GridItem></GridItem>
        </GridList> */}
      </HeadingWrapper>
    </Container>
  );
};
