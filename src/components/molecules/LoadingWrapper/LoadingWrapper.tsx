import React from "react";

import { CircularProgress } from "components";

import { Container } from "./LoadingWrapper.styled";

export const LoadingWrapper = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};
