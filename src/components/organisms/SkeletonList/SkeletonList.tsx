import { generateArray } from "helpers";
import React from "react";

import { List, Skeleton } from "./SkeletonList.styled";

interface SkeletonListInterface {
  elementsNumber?: number;
  minHeight?: number;
}

export const SkeletonList = ({
  elementsNumber = 3,
  minHeight = 500,
}: SkeletonListInterface) => {
  const list = generateArray(0, elementsNumber - 1);

  return (
    <List>
      {list?.map((number) => (
        <li key={number}>
          <Skeleton minHeight={minHeight} />
        </li>
      ))}
    </List>
  );
};
