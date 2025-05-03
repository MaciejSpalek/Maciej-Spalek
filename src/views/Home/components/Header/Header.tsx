import React from "react";
import {
  Container,
  Heading,
  GridList,
  GridItem,
  Paragraph,
  StyledImage,
} from "./Header.styled";
import { useHeader } from "./useHeader";
import { SpecialButton } from "components";
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
    header,
  } = useHomeContextProvider();

  const {
    first_photo: firstPhoto,
    second_photo: secondPhoto,
    description,
  } = header;

  return (
    <Container ref={headerContainerRef}>
      <Heading ref={headerHeadingRef}>Maciej Spałek</Heading>
      <Paragraph ref={headerParagraphRef}>{description}</Paragraph>
      <div ref={headerButtonRef}>
        <SpecialButton onClick={handleOnClick}>Contact me</SpecialButton>
      </div>
      <GridList>
        <GridItem ref={headerLeftImageRef}>
          <StyledImage
            src={firstPhoto}
            alt="Zdjęcie w windzie"
            layout="fill"
            objectFit="cover"
            priority={true}
            loading="eager"
            sizes="(min-width: 1340px) 588px, calc(46.08vw - 20px)"
          />
        </GridItem>
        <GridItem ref={headerRightImageRef}>
          <StyledImage
            src={secondPhoto}
            alt="Zdjęcie na rzece Hudson"
            layout="fill"
            objectFit="cover"
            priority={true}
            loading="eager"
            sizes="(min-width: 1340px) 588px, calc(46.08vw - 20px)"
          />
        </GridItem>
      </GridList>
    </Container>
  );
};
