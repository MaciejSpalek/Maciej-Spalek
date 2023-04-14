import { generateArray } from "helpers";
import React from "react";

import { List, Skeleton } from "./SkeletonList.styled";

interface IProps {
  elementsNumber: number;
}

export const SkeletonList = ({ elementsNumber = 3 }: IProps) => {
  const list = generateArray(0, elementsNumber - 1);

  return (
    <List>
      {list?.map((number) => (
        <li key={number}>
          <Skeleton />
        </li>
      ))}
    </List>
  );
};
