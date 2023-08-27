import {
  Container,
  List,
  Heading,
  ImageWrapper,
  CarouselBar,
  CarouselHeading,
  DotItem,
  CarouselContainer,
  DotsContainer,
} from "./Sections.styled";
import { ISections } from "./Sections.model";
import { CarouselButtons, Section } from "./components";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useRef, useState } from "react";
import { useIsMobileView } from "hooks";

export const Sections = ({ sections }: ISections) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobileView = useIsMobileView();
  const carouselRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    if (carouselRef.current) {
      carouselRef.current.slideTo(index);
    }
  };

  const dots = sections.map((_, index) => (
    <DotItem
      key={index}
      isActive={currentIndex === index}
      onClick={() => handleDotClick(index)}
    />
  ));

  const renderCarouselSlides = () =>
    sections.map(({ id, image, title }) => (
      <ImageWrapper key={id}>
        <Image src={image} layout="fill" objectFit="cover" alt={title} />
      </ImageWrapper>
    ));

  const carouselSlides = renderCarouselSlides();

  const handleNextSlide = () => {
    if (carouselRef.current) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      carouselRef.current.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (carouselRef.current) {
      if (currentIndex <= 0) {
        setCurrentIndex(sections.length);
        carouselRef.current.slideNext();
      } else {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        carouselRef.current.slidePrev();
      }
    }
  };

  return (
    <Container>
      <Heading>what i’m doing</Heading>
      <List>
        {sections.map(({ id, href, title }) => (
          <li key={id}>
            <Section id={id} href={href} title={title} />
          </li>
        ))}
      </List>
      <CarouselBar>
        <CarouselHeading>my crafts</CarouselHeading>
        {!isMobileView && (
          <CarouselButtons
            handlePrevSlide={handlePrevSlide}
            handleNextSlide={handleNextSlide}
          />
        )}
      </CarouselBar>
      <CarouselContainer>
        {isMobileView && (
          <CarouselButtons
            handlePrevSlide={handlePrevSlide}
            handleNextSlide={handleNextSlide}
          />
        )}
        <AliceCarousel
          items={carouselSlides}
          ref={carouselRef}
          activeIndex={currentIndex}
          onSlideChanged={({ item }) => setCurrentIndex(item)}
          disableButtonsControls
          disableDotsControls
          infinite
        />
        <DotsContainer>{dots}</DotsContainer>
      </CarouselContainer>
    </Container>
  );
};
