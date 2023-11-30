import "react-alice-carousel/lib/alice-carousel.css";
import { useIsMobileView } from "hooks";
import {  useRef, useState } from "react";
import { DotItem, ImageWrapper } from "./Sections.styled";
import Image from "next/image";

export const useSections = (sections) => {
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
      if (currentIndex >= sections.length - 1) {
        setCurrentIndex(0);
        carouselRef.current.slidePrev();
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        carouselRef.current.slideNext();
      }
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

 

  return {
    handlePrevSlide,
    handleNextSlide,
    setCurrentIndex,
    carouselSlides,
    currentIndex,
    isMobileView,
    carouselRef,
    dots,
  };
};
