import React from "react";
import { Container } from "./Articles.styled";
import { useArticlesListQuery } from "queries";

export const Articles = () => {
  const { data: articles } = useArticlesListQuery();

  return <Container>
    
  </Container>;
};
