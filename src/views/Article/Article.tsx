import React, { useRef } from "react";
import {
  Container,
  Heading,
  MainImageContainer,
  Paragraph,
  BlocksWrapper
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
    <Container>
      <Section title={title}>
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

        <div>
          <Heading>Introduction</Heading>
          <Paragraph>{description}</Paragraph>
        </div>

        <BlocksWrapper>
          {blocks?.map((data) => (
            <div key={data._id}>{articleBlocks({ data })[data.type]}</div>
          ))}
        </BlocksWrapper>

        <div>
          <Heading>Summary</Heading>
          <Paragraph>{description}</Paragraph>
        </div>
      </Section>
    </Container>
  );
};
