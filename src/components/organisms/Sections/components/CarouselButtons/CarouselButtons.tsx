import React from "react";
import { CarouselButtonsWrapper, IconButton } from "./CarouselButtons.styled";
import { LeftRectangleArrowIcon, RightRectangleArrowIcon } from "assets";

export const CarouselButtons = ({ handlePrevSlide, handleNextSlide }) => {
  return (
    <CarouselButtonsWrapper>
      <IconButton aria-label="Show previous image" onClick={handlePrevSlide}>
        <LeftRectangleArrowIcon  />
      </IconButton>
      <IconButton aria-label="Show next image" onClick={handleNextSlide}>
        <RightRectangleArrowIcon />
      </IconButton>
    </CarouselButtonsWrapper>
  );
};
