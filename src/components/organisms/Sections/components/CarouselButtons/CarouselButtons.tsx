import React from "react";
import { CarouselButtonsWrapper, IconButton } from "./CarouselButtons.styled";
import { LeftRectangleArrowIcon, RightRectangleArrowIcon } from "assets";
import { ICarouselButtons } from "./CarouselButtons.model";

export const CarouselButtons = ({ handlePrevSlide, handleNextSlide }: ICarouselButtons) => {
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
