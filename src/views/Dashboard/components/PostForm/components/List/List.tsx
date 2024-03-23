import { useMutation } from "@tanstack/react-query";
import { Button } from "components";
import { ENDPOINTS } from "helpers/endpoints";
import Image from "next/image";
import React from "react";
import { axiosInstance } from "services/axiosClient";
import { IPostCard } from "types";
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

  const deletePost = async (id) =>
    axiosInstance.delete(ENDPOINTS.POST.DELETE({ id }));

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      refetchList();
    },
  });

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
          {list?.map(
            ({ _id, image, type, description, price, state }, index) => (
              <Row key={_id} last={index === list.length - 1}>
                <ImageWrapper>
                  <Image src={image} height={60} width={60} />
                </ImageWrapper>
                <Cell>{type}</Cell>
                <Cell>{description || ""}</Cell>
                <Cell>{price || ""}</Cell>
                <Cell>{state || ""}</Cell>
                <ActionCell>
                  <Button size="small">Edit</Button>
                  <Button
                    onClick={() => deleteMutation.mutate(_id)}
                    size="small"
                  >
                    Remove
                  </Button>
                </ActionCell>
              </Row>
            )
          )}
        </ContentList>
      </Section>
    </Container>
  );
};
