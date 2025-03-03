import React from "react";
import Image from "next/image";
import { Filters } from "../Filters";
import { useArticlesListQuery } from "queries";
import { EditArticleCell } from "../EditArticleCell";
import {
  ImageWrapper,
  ContentList,
  HeaderList,
  ActionCell,
  HeaderCell,
  HeaderItem,
  Container,
  Section,
  Cell,
  Row,
  TopWrapper,
  Heading,
} from "./List.styled";
import { AddArticleDialog } from "../AddArticleDialog";
import { headers } from "./List.model";
import { RemoveArticleCell } from "../RemoveArticleCell";

export const List = () => {
  const { data, isFetching, isError, refetch } = useArticlesListQuery();

  if (isError) return <div>error</div>;

  return (
    <Container>
      <Filters />
      <Section>
        <TopWrapper>
          <Heading>Posts</Heading>
          <AddArticleDialog />
        </TopWrapper>
        <HeaderList>
          {headers.map((header) => (
            <HeaderItem key={header}>
              <HeaderCell>{header}</HeaderCell>
            </HeaderItem>
          ))}
        </HeaderList>
        <ContentList>
          {isFetching ? (
            <p>Loading...</p>
          ) : (
            data?.map((article, index) => {
              const { _id, image, title } = article;
              return (
                <Row key={_id} last={index === data.length - 1}>
                  <Cell>{index + 1}.</Cell>
                  <Cell>
                    <ImageWrapper>
                      <Image
                        src={image}
                        height={60}
                        width={60}
                        alt={title}
                      />
                    </ImageWrapper>
                  </Cell>
                  <Cell>{title || ""}</Cell>
                  <ActionCell>
                    <EditArticleCell refetchList={refetch} data={article} />
                    <RemoveArticleCell refetchList={refetch} id={_id} />
                  </ActionCell>
                </Row>
              );
            })
          )}
        </ContentList>
      </Section>
    </Container>
  );
};
