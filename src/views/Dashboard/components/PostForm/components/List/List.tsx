import { useMutation } from "@tanstack/react-query";
import { Button } from "components";
import { ENDPOINTS } from "helpers/endpoints";
import Image from "next/image";
import React from "react";
import { axiosInstance } from "services/axiosClient";
import { IPostCard } from "types";
import { EditPostCell } from "../EditPostCell";
import { RemovePostCell } from "../RemovePostCell";
import {
  Container,
  Section,
  Row,
  Cell,
  HeaderList,
  ActionCell,
  ImageWrapper,
  HeaderCell,
  HeaderItem,
  ContentList,
} from "./List.styled";

interface IList {
  refetchList: () => void;
  isFetching: boolean;
  list: IPostCard[];
}

const headers = ["Image", "Type", "Description", "Price", "State", "Action"];

export const List = ({ list, isFetching, refetchList }: IList) => {
  if (isFetching) return null;



  return (
    <Container>
      <Section>
        <HeaderList>
          {headers.map((header) => (
            <HeaderItem>
              <HeaderCell>{header}</HeaderCell>
            </HeaderItem>
          ))}
        </HeaderList>
        <ContentList>
          {list?.map((post, index) => {
            const { _id, image, type, description, price, state } = post;
            return (
              <Row key={_id} last={index === list.length - 1}>
                <ImageWrapper>
                  <Image src={image} height={60} width={60} />
                </ImageWrapper>
                <Cell>{type}</Cell>
                <Cell>{description || ""}</Cell>
                <Cell>{price || ""}</Cell>
                <Cell>{state || ""}</Cell>
                <ActionCell>
                  <EditPostCell refetchList={refetchList} data={post} />
                  <RemovePostCell refetchList={refetchList} id={_id}/>
                </ActionCell>
              </Row>
            );
          })}
        </ContentList>
      </Section>
    </Container>
  );
};
