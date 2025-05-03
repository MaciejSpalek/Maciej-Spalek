import React, { Fragment, useRef } from "react";
import {
  Container,
  Heading,
  MainImageContainer,
  Paragraph,
  BlocksWrapper,
  Wrapper,
} from "./Article.styled";
import { IArticle } from "types";
import { articleBlocks } from "./helpers";
import { Section } from "layouts/Section";
import Image from "next/image";

interface ArticleProps {
  data: IArticle;
}

export const Article = ({ data }: ArticleProps) => {
  const { blocks, description, image, title } = data;
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <Section title={title}>
      <Container>
        <MainImageContainer ref={imageRef}>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="image"
            loading="eager"
            priority
          />
        </MainImageContainer>

        <Wrapper>
          <Heading>Introduction</Heading>
          <Paragraph>{description}</Paragraph>
        </Wrapper>

        <BlocksWrapper>
          {blocks?.map((data) => (
            <Fragment key={data._id}>{articleBlocks({ data })[data.type]}</Fragment>
          ))}
        </BlocksWrapper>

        <Wrapper>
          <Heading>Summary</Heading>
          <Paragraph>{description}</Paragraph>
        </Wrapper>
      </Container>
    </Section>
  );
};
