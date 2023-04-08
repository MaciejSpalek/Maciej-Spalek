import React from "react";
import { Container, SectionImage, Title } from "./Section.styled";
import { SectionProps } from "./Section.model";
import Link from "next/link";

export const Section = ({ href, image, title }: SectionProps) => {
  return (
    <Link href={href}>
      <a>
        <Container href={href}>
          <SectionImage src={image} alt={title} />
          <Title>{title}</Title>
        </Container>
      </a>
    </Link>
  );
};
