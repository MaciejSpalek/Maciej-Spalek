import React from "react";
import {
  Container,
  ImageWrapper,
  Title,
  HiddenWrapper,
} from "./Section.styled";
import { SectionProps } from "./Section.model";
import Link from "next/link";
import Image from "next/image";

export const Section = ({ href, image, title }: SectionProps) => {
  return (
    <Link href={href}>
      <a>
        <Container>
          {/* <ImageWrapper>
            <Image src={image} layout="fill" objectFit="cover" alt={title} />
            <HiddenWrapper />
          </ImageWrapper> */}
          <Title>{title}</Title>
        </Container>
      </a>
    </Link>
  );
};
