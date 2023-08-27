import React from "react";
import { CarouselButtonsWrapper, IconButton } from "./CarouselButtons.styled";
import { LeftRectangleArrowIcon, RightRectangleArrowIcon } from "assets";

export const CarouselButtons = ({ handlePrevSlide, handleNextSlide }) => {
  return (
    <CarouselButtonsWrapper>
      <IconButton onClick={handlePrevSlide}>
        <LeftRectangleArrowIcon />
      </IconButton>
      <IconButton onClick={handleNextSlide}>
        <RightRectangleArrowIcon />
      </IconButton>
    </CarouselButtonsWrapper>
  );
};
