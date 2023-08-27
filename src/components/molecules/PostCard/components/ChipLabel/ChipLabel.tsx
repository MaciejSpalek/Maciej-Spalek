import React from "react";
import { Container } from "./ChipLabel.styled";
import { IChipLabel } from "./ChipLabel.model";
import { getChipText } from "./helpers";

export const ChipLabel = ({ type }: IChipLabel) => {
  return <Container>{getChipText(type)}</Container>;
};
