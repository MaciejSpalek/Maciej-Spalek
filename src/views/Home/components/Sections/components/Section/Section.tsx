import React from "react";
import {
  Container,
  Title,
} from "./Section.styled";
import { SectionProps } from "./Section.model";
import Link from "next/link";

export const Section = ({ id, href, title }: SectionProps) => {
  const isOddNumber = id % 2 === 1
  
  return (
    <Link href={href}>
      <a>
        <Container>
          <Title isOddNumber={isOddNumber}>{title}</Title>
        </Container>
      </a>
    </Link>
  );
};
