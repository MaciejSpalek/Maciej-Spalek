import React from "react";
import Image from "next/image";
import { Filters } from "../Filters";
import { usePostListQuery } from "queries";
import { EditPostCell } from "../EditPostCell";
import { RemovePostCell } from "../RemovePostCell";
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
} from "./List.styled";
import { LS_KEYS } from "helpers";
import { IPost } from "types";

const headers = ["Image", "Type", "Description", "Price", "State", "Action"];

export const List = () => {
  const type = localStorage.getItem(LS_KEYS.POST_LIST_TYPE) as IPost["type"];
  const { data, isFetching, isError, refetch } = usePostListQuery({ type });

  if (isError) return <div>error</div>;
  if (isFetching) return null;

  return (
    <Container>
      <Filters />
      <Section>
        <HeaderList>
          {headers.map((header) => (
            <HeaderItem>
              <HeaderCell>{header}</HeaderCell>
            </HeaderItem>
          ))}
        </HeaderList>
        <ContentList>
          {data.map((post, index) => {
            const { _id, image, type, description, price, state } = post;
            return (
              <Row key={_id} last={index === data.length - 1}>
                <ImageWrapper>
                  <Image src={image} height={60} width={60} />
                </ImageWrapper>
                <Cell>{type}</Cell>
                <Cell>{description || ""}</Cell>
                <Cell>{price || ""}</Cell>
                <Cell>{state || ""}</Cell>
                <ActionCell>
                  <EditPostCell refetchList={refetch} data={post} />
                  <RemovePostCell refetchList={refetch} id={_id} />
                </ActionCell>
              </Row>
            );
          })}
        </ContentList>
      </Section>
    </Container>
  );
};
