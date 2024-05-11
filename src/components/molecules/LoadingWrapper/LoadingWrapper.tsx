import React from "react";

import { CircularProgress } from "components";

import { Container } from "./LoadingWrapper.styled";

interface ILoadingWrapper {
  height?: string;
  size?: number;
}

export const LoadingWrapper = ({ height, size }: ILoadingWrapper) => {
  return (
    <Container height={height}>
      <CircularProgress size={size} />
    </Container>
  );
};
