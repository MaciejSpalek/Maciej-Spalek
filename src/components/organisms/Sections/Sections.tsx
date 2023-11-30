import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { CarouselButtons, Section } from "./components";
import { ISections } from "./Sections.model";
import { useSections } from "./useSections";
import {
  CarouselContainer,
  CarouselHeading,
  DotsContainer,
  CarouselBar,
  Container,
  Heading,
  List,
} from "./Sections.styled";
import { useHomeContextProvider } from "views/Home/context/HomeContextProvider";

export const Sections = ({ sections }: ISections) => {
  const {
    handlePrevSlide,
    handleNextSlide,
    setCurrentIndex,
    carouselSlides,
    currentIndex,
    isMobileView,
    carouselRef,
    dots,
  } = useSections(sections);

  const {
    sectionsCarouselContainerRef,
    sectionsCarouselBarRef,
    sectionsContainerRef,
    sectionsHeadingRef,
    sectionsListRef,
  } = useHomeContextProvider();

  return (
    <Container ref={sectionsContainerRef}>
      <Heading ref={sectionsHeadingRef}>what i’m doing</Heading>
      <List ref={sectionsListRef}>
        {sections.map(({ id, href, title }) => (
          <li key={id}>
            <Section href={href} title={title} />
          </li>
        ))}
      </List>
      <CarouselBar ref={sectionsCarouselBarRef}>
        <CarouselHeading>my crafts</CarouselHeading>
        {!isMobileView && (
          <CarouselButtons
            handlePrevSlide={handlePrevSlide}
            handleNextSlide={handleNextSlide}
          />
        )}
      </CarouselBar>
      <CarouselContainer ref={sectionsCarouselContainerRef}>
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
          animationType="fadeout"
          animationDuration={1000}
          infinite
        />
        <DotsContainer>{dots}</DotsContainer>
      </CarouselContainer>
    </Container>
  );
};
