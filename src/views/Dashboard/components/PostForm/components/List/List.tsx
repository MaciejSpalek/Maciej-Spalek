import Image from "next/image";
import React from "react";
import { IPostCard } from "types";
import { Container, Section, ListItem, Cell } from "./List.styled";

interface IList {
  isFetching: boolean;
  list: IPostCard[];
}

export const List = ({ list, isFetching }: IList) => {
  if (isFetching) return null;

  return (
    <Container>
      <Section>
        {list?.map(({ _id, image, type, description, price, state }, index) => (
          <ListItem key={_id} last={index === list.length - 1}>
            <Image src={image} height={60} width={60} />
            <Cell>{type}</Cell>
            {description && <Cell>{description}</Cell>}
            {price && <Cell>{price}</Cell>}
            {state && <Cell>{state}</Cell>}
          </ListItem>
        ))}
      </Section>
    </Container>
  );
};
