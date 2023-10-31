import React from "react";
import { Container, Title } from "./Section.styled";
import { SectionProps } from "./Section.model";
import Link from "next/link";

export const Section = ({ href, title }: SectionProps) => {
  return (
    <Link href={href}>
      <a>
        <Container>
          <Title>{title}</Title>
        </Container>
      </a>
    </Link>
  );
};
