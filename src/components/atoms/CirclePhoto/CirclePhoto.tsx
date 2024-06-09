import React from "react";
import { ImageWrapper } from "./CirclePhoto.styled";
import Image from "next/image";
import { SecondHeaderPhoto } from "assets/images";

interface ICirclePhoto {
  width: number;
}

export const CirclePhoto = ({ width }: ICirclePhoto) => (
  <ImageWrapper width={width}>
    <Image
      src={SecondHeaderPhoto}
      loading="eager"
      quality={100}
      alt="it's me"
      priority
      layout="responsive"
      sizes="(min-width: 780px) 233px, (min-width: 560px) 500px, calc(90vw + 14px)"
    />
  </ImageWrapper>
);
