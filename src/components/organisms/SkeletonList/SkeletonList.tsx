import { generateArray } from "helpers";
import React from "react";

import { List, Item, Skeleton } from "./SkeletonList.styled";

interface IProps {
  elementsNumber: number;
}

export const SkeletonList = ({ elementsNumber = 3 }: IProps) => {
  const list = generateArray(0, elementsNumber - 1);

  return (
    <List>
      {list?.map((number) => (
        <Item key={number}>
          <Skeleton />
        </Item>
      ))}
    </List>
  );
};
