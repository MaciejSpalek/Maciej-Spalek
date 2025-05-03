import React from "react";
import {
  Container,
  Heading,
  ArticleThumbnail,
  ArticlesContainer,
  ImageWrapper,
  ThumbnailHeading,
} from "./Articles.styled";
import { useArticlesListQuery } from "queries";
import Image from "next/image";
import { URLS } from "helpers";
import { useRouter } from "next/router";

export const Articles = () => {
  const { data: articles } = useArticlesListQuery({ filters: {} });
  const router = useRouter();

  const goToArticle = ({ id }: { id: string }) => {
    router.push(URLS.article({ id }));
  };

  return (
    <Container>
      <Heading>Articles</Heading>
      <ArticlesContainer>
        {articles?.map((article, index) => (
          <ArticleThumbnail key={index}>
            <ImageWrapper
              onClick={() => goToArticle({ id: article._id })}
            >
              <Image
                src={article.image}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="image"
                loading="eager"
                priority
              />
            </ImageWrapper>
            <ThumbnailHeading>{article.title || "dupa"}</ThumbnailHeading>
          </ArticleThumbnail>
        ))}
      </ArticlesContainer>
    </Container>
  );
};
